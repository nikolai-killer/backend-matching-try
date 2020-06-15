import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { InstitutionEntity } from '../institution/institution.entity';
import { CategoryEntity } from '../category/category.entity';
import { UserEntity } from '../user/user.entity';

@Entity('addresses')
export class AddressEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  street: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  number: string;

  @Column()
  @IsOptional()
  @IsString()
  addition?: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  country: string;
}
