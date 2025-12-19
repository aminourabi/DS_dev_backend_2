import { ValidationPipe } from '@nestjs/common'; // import validation pipe
import { NestFactory } from '@nestjs/core'; // import factory ta3 Nest
import { AppModule } from './app.module'; // import AppModule
import { seedUsers } from './database/seed'; // import function seed users
import { DataSource } from 'typeorm'; // import TypeORM DataSource

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // create app Nest
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // apply validation globally whitelist -->ignore extra props
  await app.listen(3000); // listen port 3000
  const dataSource = app.get(DataSource); // get datasource TypeORM
  await seedUsers(dataSource); // seed users fel DB
}
bootstrap(); // start app

