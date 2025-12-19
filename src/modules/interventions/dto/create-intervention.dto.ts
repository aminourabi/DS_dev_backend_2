import { IsArray, IsNumber } from 'class-validator';

// DTO mta3 creation d'une intervention 
// hatha yjina mil frontend bech n3amlo validation lil data

export class CreateInterventionDto {

  // id mta3 l’appareil
  // lazim yken number 
  @IsNumber()
  deviceId: number;

  // liste mta3 les pièces el mosta3mla
  // lazim array (tableau) 
  @IsArray()
  partIds: number[];
}
