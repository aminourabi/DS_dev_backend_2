import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// DTO mta3 register user ya3ni inscription
export class RegisterDto {

  // email lazim ykoun valide, sinon nest y9elek barra raj3ou 
  @IsEmail()
  email: string;

  // username obligatoire, ma famech user bla issim
  @IsNotEmpty()
  username: string;

  // mot de passe minimum 6 caracteres,
  // matjich t7ot "123" w t9el secure 
  @MinLength(6)
  password: string;
}
