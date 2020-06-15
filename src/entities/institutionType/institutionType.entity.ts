import { Column, Entity, OneToMany } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../institution/institution.entity';

@Entity('institutionTypes')
export class InstitutionTypeEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  /*
   * Relations
   * */
  @OneToMany(() => InstitutionEntity, (institution) => institution.institutionType)
  institutions: InstitutionEntity[];
}
