import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intervention } from '../../database/entities/intervention.entity';
import { Device } from '../../database/entities/device.entity';
import { Part } from '../../database/entities/part.entity';
import { InterventionsService } from './interventions.service';
import { InterventionsController } from './interventions.controller';

// Module mta3 interventions 
// heni narbte entities m3a service m3a controller

@Module({
  imports: [
    // connexion avec les tables : Intervention, Device, Part
    TypeOrmModule.forFeature([Intervention, Device, Part]),
  ],
  // logique métier
  providers: [InterventionsService],
  // gestion des routes
  controllers: [InterventionsController],
})
export class InterventionsModule {}
