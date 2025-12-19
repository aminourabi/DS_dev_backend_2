import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { databaseConfig } from './config/database.config';

// Modules
import { AuthModule } from './modules/auth/auth.module';

import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';

import { PartsModule } from './modules/parts/parts.module';

import { DevicesModule } from './modules/devices/devices.module';

import { InterventionsModule } from './modules/interventions/interventions.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig), // DB
    AuthModule,
    PartsModule,
     DevicesModule,
       InterventionsModule,
      
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
