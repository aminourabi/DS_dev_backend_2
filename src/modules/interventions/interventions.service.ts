import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'; // import injectable w exceptions

import { InjectRepository } from '@nestjs/typeorm'; // inject repositories
import { DataSource, Repository } from 'typeorm'; // import datasource w repository
import { Intervention } from '../../database/entities/intervention.entity'; // entity Intervention
import { Device, DeviceStatus } from '../../database/entities/device.entity'; // entity Device m3a status
import { Part } from '../../database/entities/part.entity'; // entity Part
import { CreateInterventionDto } from './dto/create-intervention.dto'; // DTO create intervention

@Injectable() // service injectable
export class InterventionsService {
  constructor(
    private dataSource: DataSource, // datasource pour transaction
    @InjectRepository(Intervention)
    private interventionRepo: Repository<Intervention>, // repo intervention
    @InjectRepository(Device)
    private deviceRepo: Repository<Device>, // repo device
    @InjectRepository(Part)
    private partRepo: Repository<Part>, // repo part
  ) {}

  // create intervention
  async create(dto: CreateInterventionDto, userId: number) {
    return this.dataSource.transaction(async (manager) => { // start transaction
      const device = await manager.findOne(Device, {
        where: { id: dto.deviceId }, // find device par id
      });
      if (!device) throw new NotFoundException('Device not found'); // si ma famach device

      const parts = await manager.findByIds(Part, dto.partIds); // jib parts
      if (parts.length !== dto.partIds.length) {
        throw new NotFoundException('Part not found'); // si part na9is
      }

      for (const part of parts) { // loop 3al parts
        if (part.quantity <= 0) {
          throw new BadRequestException(
            `Stock insufficient for ${part.name}`, // stock ma kafech
          );
        }
        part.quantity -= 1; // na9es quantity
        await manager.save(part); // save update part
      }

      device.status = DeviceStatus.REPAIRING; // device walleh repairing
      await manager.save(device); // save device

      const intervention = manager.create(Intervention, {
        technician: { id: userId } as any, // link technician
        device, // link device
        parts, // link parts
      });

      return manager.save(intervention); // save intervention
    });
  }

  // find kol interventions
  findAll() {
    return this.interventionRepo.find({
      relations: ['technician', 'device', 'parts'], // load relations
    });
  }
}
