import { IsOptional, IsNumber, Min } from 'class-validator'; // import validators

export class UpdatePartDto {
  @IsOptional() // name mochkla ok, yemchi fara4 ok
  name?: string;

  @IsOptional() // quantity optionnel
  @IsNumber() // si present, lazm number
  @Min(0) // minimum 0
  quantity?: number;

  @IsOptional() // price optionnel
  @IsNumber() // si present, lazm number
  @Min(0) // minimum 0
  price?: number;
}
