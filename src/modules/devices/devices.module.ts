import { Module } from '@nestjs/common'; // import module nestjs
import { TypeOrmModule } from '@nestjs/typeorm'; // import TypeORM module
import { Device } from '../../database/entities/device.entity'; // import entity Device
import { DevicesService } from './devices.service'; // import service ta3 devices
import { DevicesController } from './devices.controller'; // import controller ta3 devices

@Module({
  imports: [TypeOrmModule.forFeature([Device])], // connect entity Device m3a TypeORM
  providers: [DevicesService], // inject service
  controllers: [DevicesController], // inject controller
})
export class DevicesModule {} // export module
