import { Module } from '@nestjs/common'; // import module nestjs
import { TypeOrmModule } from '@nestjs/typeorm'; // import TypeORM module
import { Part } from '../../database/entities/part.entity'; // import entity Part
import { PartsService } from './parts.service'; // import service ta3 parts
import { PartsController } from './parts.controller'; // import controller ta3 parts

@Module({
  imports: [TypeOrmModule.forFeature([Part])], // connect entity Part m3a TypeORM
  providers: [PartsService], // inject service
  controllers: [PartsController], // inject controller
})
export class PartsModule {} // export module
