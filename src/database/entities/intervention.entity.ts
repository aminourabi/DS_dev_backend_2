import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Device } from './device.entity';
import { Part } from './part.entity';

@Entity()
export class Intervention {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  technician: User;

  @ManyToOne(() => Device)
  device: Device;

  @ManyToMany(() => Part)
  @JoinTable()
  parts: Part[];

  @CreateDateColumn()
  createdAt: Date;
}
