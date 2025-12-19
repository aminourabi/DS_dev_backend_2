import { DataSource } from 'typeorm'; // import datasource TypeORM
import * as bcrypt from 'bcrypt'; // import bcrypt pour hash password
import { User } from './entities/user.entity'; // import entity User
import { Role } from '../common/enums/role.enum'; // import enum Role

export async function seedUsers(dataSource: DataSource) { // function pour créer users par défaut
  const repo = dataSource.getRepository(User); // get repo User

  const adminExists = await repo.findOne({ where: { email: 'admin@mail.com' } }); // check si admin deja exist
  if (adminExists) return; // si oui, ma3mlna rien

  const admin = repo.create({ // create admin
    email: 'admin@mail.com',
    username: 'admin',
    password: await bcrypt.hash('admin123', 10), // hash password
    role: Role.ADMIN, // role admin
  });

  const tech = repo.create({ // create technician
    email: 'tech@mail.com',
    username: 'tech',
    password: await bcrypt.hash('tech123', 10), // hash password
    role: Role.TECH, // role tech
  });

  await repo.save([admin, tech]); // save fel DB
  console.log(' Admin & Tech created'); // message fel console
}
