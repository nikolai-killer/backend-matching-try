import { IsArray, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { BaseEntity } from '../base.entity';
import { AddressEntity } from '../address/address.entity';
import { InstitutionAdminEntity } from '../institutionAdmin/institutionAdmin.entity';
import { InstitutionTypeEntity } from '../institutionType/institutionType.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { Type } from 'class-transformer';
import { GetCategoryDto } from '../category/responses.dto';
import { validateEach } from '@nestjs/common/utils/validate-each.util';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { RewardRecordEntity } from '../rewardRecord/rewardRecord.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';

@Entity('institutions')
export class InstitutionEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  contactEmail: string;

  @Column()
  @IsOptional()
  @IsNumberString()
  phoneNumber: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionTypeId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionAdminId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  addressId: string;

  /*
   * Relations
   * */
  @IsNotEmpty()
  @IsArray()
  @Type(() => CategoryEntity)
  @ManyToMany(() => CategoryEntity, (category) => category.institutions, {
    cascade: true
  })
  @JoinTable({
    name: 'institutions_categories',
    joinColumn: {
      name: 'institution',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToOne(() => InstitutionTypeEntity, (institutionType) => institutionType.institutions)
  @JoinColumn()
  institutionType: InstitutionTypeEntity;

  @OneToOne(() => InstitutionAdminEntity, (institutionAdmin) => institutionAdmin.institution)
  @JoinColumn()
  institutionAdmin: InstitutionAdminEntity;

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.institution)
  institutionalOffers?: InstitutionalOfferEntity[];

  @OneToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.institution)
  institutionalRequests?: InstitutionalRequestEntity[];

  @OneToMany(() => RewardRecordEntity, (rewardRecord) => rewardRecord.verifyingInstitution)
  verifiedRewardRecords?: RewardRecordEntity;

  @OneToOne(() => InstitutionalMatchingProfileEntity, (matchingProfile) => matchingProfile.institution)
  @JoinColumn()
  matchingProfile?: InstitutionalMatchingProfileEntity;
}
