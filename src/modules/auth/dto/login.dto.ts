import { IsEmail, IsNotEmpty } from 'class-validator';

// DTO mta3 login
// nista3mlouh bech n3amlo validation lil data li tjina mil frontend

export class LoginDto {

  // nithabtou li email mawjoud w format mta3ou shih
  @IsEmail()
  email: string;

  // nithabtou li password mahouche feragh
  @IsNotEmpty()
  password: string;
}
