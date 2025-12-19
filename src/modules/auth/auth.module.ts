import { Module } from '@nestjs/common'; // import ta3 nestjs module
import { JwtModule } from '@nestjs/jwt'; // import module ta3 jwt
import { TypeOrmModule } from '@nestjs/typeorm'; // import module ta3 typeorm
import { AuthService } from './auth.service'; // import service ta3 auth
import { User } from '../../database/entities/user.entity'; // import entity User
import { AuthController } from './auth.controller'; // import controller ta3 auth
import { JwtStrategy } from './strategies/jwt.strategy'; // import jwt strategy
import { jwtConstants } from '../../config/jwt.config'; // import secret jwt

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // connect entity User m3a TypeORM
    JwtModule.register({ // configure JwtModule
      secret: jwtConstants.secret, // secret ta3 JWT
      signOptions: { expiresIn: '1d' }, // expire ba3d nhar
    }),
  ],
  providers: [AuthService, JwtStrategy], // providers mta3 service w strategy
  controllers: [AuthController], // controller ta3 auth
})
export class AuthModule {} // export ta3 module
