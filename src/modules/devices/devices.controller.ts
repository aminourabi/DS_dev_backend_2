import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
} from '@nestjs/common'; // import decorators nestjs

import { DevicesService } from './devices.service'; // import service ta3 devices
import { CreateDeviceDto } from './dto/create-device.dto'; // import DTO create
import { Roles } from '../../common/decorators/roles.decorator'; // import decorator roles
import { Role } from '../../common/enums/role.enum'; // import enum role
import { DeviceStatus } from '../../database/entities/device.entity'; // import enum status

@Controller('devices') // route /devices
export class DevicesController {
  constructor(private devicesService: DevicesService) {} // inject service

  @Get() // route GET /devices
  findAll() {
    return this.devicesService.findAll(); // jiblek kol devices
  }

  @Roles(Role.TECH, Role.ADMIN) // only TECH w ADMIN yefdou
  @Post() // route POST /devices
  create(@Body() dto: CreateDeviceDto) { // body create
    return this.devicesService.create(dto); // create device
  }

  @Roles(Role.ADMIN) // only ADMIN yefdou
  @Patch(':id/status') // route PATCH /devices/:id/status
  updateStatus(
    @Param('id') id: number, // param id
    @Body('status') status: DeviceStatus, // body status
  ) {
    return this.devicesService.updateStatus(+id, status); // update status
  }
}
