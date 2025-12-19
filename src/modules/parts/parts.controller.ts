import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common'; // import decorators nestjs

import { PartsService } from './parts.service'; // import service ta3 parts
import { CreatePartDto } from './dto/create-part.dto'; // import DTO create
import { UpdatePartDto } from './dto/update-part.dto'; // import DTO update
import { Roles } from '../../common/decorators/roles.decorator'; // import decorator roles
import { Role } from '../../common/enums/role.enum'; // import enum roles

@Controller('parts') // route /parts
export class PartsController {
  constructor(private partsService: PartsService) {} // inject service

  @Get() // route GET /parts
  findAll() {
    return this.partsService.findAll(); // jiblek kol parts
  }

  @Roles(Role.ADMIN) // access seulement admin
  @Post() // route POST /parts
  create(@Body() dto: CreatePartDto) { // ya5ou body create
    return this.partsService.create(dto); // create part
  }

  @Roles(Role.ADMIN) // access admin
  @Patch(':id') // route PATCH /parts/:id
  update(@Param('id') id: number, @Body() dto: UpdatePartDto) { // id m3a body update
    return this.partsService.update(+id, dto); // update part
  }

  @Roles(Role.ADMIN) // access admin
  @Delete(':id') // route DELETE /parts/:id
  remove(@Param('id') id: number) { // id param
    return this.partsService.remove(+id); // delete part
  }
}
