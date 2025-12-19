import { IsNotEmpty } from 'class-validator'; // import validator

export class CreateDeviceDto {
  @IsNotEmpty() // brand ma yemchich fara4
  brand: string;

  @IsNotEmpty() // model ma yemchich fara4
  model: string;

  @IsNotEmpty() // serialNumber ma yemchich fara4
  serialNumber: string;
}
