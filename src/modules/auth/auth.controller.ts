import { Controller, Post, Body } from '@nestjs/common'; // import ta3 nestjs
import { AuthService } from './auth.service'; // import service ta3 auth
import { RegisterDto } from './dto/register.dto'; // import DTO ta3 register
import { LoginDto } from './dto/login.dto'; // import DTO ta3 login

@Controller('auth') // hna controller ta3 auth
export class AuthController {
  constructor(private authService: AuthService) {} // inject service

  @Post('register') // route POST /auth/register
  register(@Body() dto: RegisterDto) { // ya5ou body w yeb3ath lel service
    return this.authService.register(dto); // call service ta3 register
  }

  @Post('login') // route POST /auth/login
  login(@Body() dto: LoginDto) { // ya5ou body w ychecki login
    return this.authService.login(dto); // call service ta3 login
  }
}
