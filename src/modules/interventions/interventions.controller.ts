import {
  Controller,
  Post,
  Get,
  Body,
  Req,
} from '@nestjs/common';
import { InterventionsService } from './interventions.service';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { Roles } from '../../common/decorators/roles.decorator';
import { Role } from '../../common/enums/role.enum';

// Controller mta3 les interventions 
// heni n3amlo gestion des routes :  create / get

@Controller('interventions')
export class InterventionsController {

  // injection du service
  constructor(private interventionsService: InterventionsService) {}

  // route POST créer une intervention
  // accessible seulement lil TECH 
  @Roles(Role.TECH)
  @Post()
  create(@Body() dto: CreateInterventionDto, @Req() req) {
    // n3addi les données + id mta3 l user connecté
    return this.interventionsService.create(dto, req.user.id);
  }

  // route GET : afficher toutes les interventions
  @Get()
  findAll() {
    return this.interventionsService.findAll();
  }
}
