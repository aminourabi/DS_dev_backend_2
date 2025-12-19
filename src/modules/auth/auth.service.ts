import { Injectable, UnauthorizedException } from '@nestjs/common'; // import nestjs decorators w exceptions
import { JwtService } from '@nestjs/jwt'; // import jwt service
import * as bcrypt from 'bcrypt'; // import bcrypt pour hasher password
import { InjectRepository } from '@nestjs/typeorm'; // inject repository TypeORM
import { Repository } from 'typeorm'; // import repository TypeORM
import { User } from '../../database/entities/user.entity'; // import entity User
import { RegisterDto } from './dto/register.dto'; // import DTO ta3 register
import { LoginDto } from './dto/login.dto'; // import DTO ta3 login
import { Role } from '../../common/enums/role.enum'; // import enum Role

@Injectable() // injectable service
export class AuthService {
  constructor(
    @InjectRepository(User) // inject ta3 user repository
    private userRepo: Repository<User>,
    private jwtService: JwtService, // inject jwt service
  ) {}

  // fonction register
  async register(dto: RegisterDto) {
    const hashed = await bcrypt.hash(dto.password, 10); // hash password

    const user = this.userRepo.create({
      ...dto, // kopie données
      password: hashed, // mets password hashed
      role: Role.TECH, // role par défaut
    });

    await this.userRepo.save(user); // sauvegarde user fel DB
    return { message: 'User created successfully' }; // message succès
  }

  // fonction login
  async login(dto: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { email: dto.email }, // cherche user par email
    });

    // check password
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials'); // si pas correct throw exception
    }

    const payload = { id: user.id, role: user.role }; // prepare payload JWT

    return {
      access_token: this.jwtService.sign(payload), // generate JWT
    };
  }
}
