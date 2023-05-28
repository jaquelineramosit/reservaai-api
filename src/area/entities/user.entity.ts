import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'publicid', nullable: false })
  publicId: string;

  @Column({ name: 'fullname', nullable: false })
  fullName: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'phone', nullable: false })
  phone: string;

  @Column({ name: 'areaid' })
  areaId: number;

  @Column({ name: 'adressid' })
  addressId: number;
}
