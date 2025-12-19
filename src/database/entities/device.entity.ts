import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'; // import decorators TypeORM

export enum DeviceStatus { // enum ta3 status mta3 device
  PENDING = 'PENDING', // w9t li mazal ma t3adelch
  REPAIRING = 'REPAIRING', // fi repair
  READY = 'READY', // ready
}

@Entity() // define table fel DB
export class Device {
  @PrimaryGeneratedColumn() // id auto increment
  id: number;

  @Column() // brand ta3 device
  brand: string;

  @Column() // model ta3 device
  model: string;

  @Column({ unique: true }) // serial number, must be unique
  serialNumber: string;

  @Column({
    type: 'enum', // type enum
    enum: DeviceStatus, // enum li na3mlna
    default: DeviceStatus.PENDING, // default status PENDING
  })
  status: DeviceStatus;
}
