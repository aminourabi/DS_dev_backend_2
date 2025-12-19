import { Injectable, NotFoundException } from '@nestjs/common'; // import injectable w exception
import { InjectRepository } from '@nestjs/typeorm'; // inject repository TypeORM
import { Repository } from 'typeorm'; // import repository
import { Device, DeviceStatus } from '../../database/entities/device.entity'; // import entity Device w enum status
import { CreateDeviceDto } from './dto/create-device.dto'; // import DTO create

@Injectable() // injectable service
export class DevicesService {
  constructor(
    @InjectRepository(Device) // inject repository ta3 Device
    private deviceRepo: Repository<Device>,
  ) {}

  // create device
  create(dto: CreateDeviceDto) {
    const device = this.deviceRepo.create(dto); // create object
    return this.deviceRepo.save(device); // save fel DB
  }

  // find kol devices
  findAll() {
    return this.deviceRepo.find(); // find all
  }

  // update status device
  async updateStatus(id: number, status: DeviceStatus) {
    const device = await this.deviceRepo.findOne({ where: { id } }); // find by id
    if (!device) throw new NotFoundException('Device not found'); // si ma l9ach throw

    device.status = status; // update status
    return this.deviceRepo.save(device); // save update
  }
}
