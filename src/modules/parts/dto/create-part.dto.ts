import { IsNotEmpty, IsNumber, Min } from 'class-validator'; // import validators

export class CreatePartDto {
  @IsNotEmpty() // name ma yemchich fara4
  name: string;

  @IsNotEmpty() // reference ma temchich fara4
  reference: string;

  @IsNumber() // quantity lazm tkoun number
  @Min(0) // minimum 0
  quantity: number;

  @IsNumber() // price lazm number
  @Min(0) // minimum 0
  price: number;
}
