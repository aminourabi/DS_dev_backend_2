import { Injectable, NotFoundException } from '@nestjs/common'; // import nestjs injectable w exception
import { InjectRepository } from '@nestjs/typeorm'; // inject repository TypeORM
import { Repository } from 'typeorm'; // import repository
import { Part } from '../../database/entities/part.entity'; // import entity Part
import { CreatePartDto } from './dto/create-part.dto'; // import DTO create
import { UpdatePartDto } from './dto/update-part.dto'; // import DTO update

@Injectable() // injectable service
export class PartsService {
  constructor(
    @InjectRepository(Part) // inject repository ta3 Part
    private partRepo: Repository<Part>,
  ) {}

  // create part
  create(dto: CreatePartDto) {
    const part = this.partRepo.create(dto); // create object
    return this.partRepo.save(part); // save fel DB
  }

  // find kol parts
  findAll() {
    return this.partRepo.find(); // find all
  }

  // update part
  async update(id: number, dto: UpdatePartDto) {
    const part = await this.partRepo.findOne({ where: { id } }); // find by id
    if (!part) throw new NotFoundException('Part not found'); // si ma l9ach throw

    Object.assign(part, dto); // merge les données
    return this.partRepo.save(part); // save update
  }

  // remove part
  async remove(id: number) {
    const part = await this.partRepo.findOne({ where: { id } }); // find by id
    if (!part) throw new NotFoundException('Part not found'); // si ma l9ach throw

    return this.partRepo.remove(part); // delete part
  }
}
