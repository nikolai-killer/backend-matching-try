import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { InstitutionEntity } from '../institution/institution.entity';
import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { RewardDefinitionEntity } from '../rewardDefinition/rewardDefinition.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
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
  @ManyToMany(() => InstitutionEntity, (institution) => institution.categories)
  institutions?: InstitutionEntity[];

  @ManyToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.categories)
  institutionalOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.categories)
  institutionalRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => PrivateOfferEntity, (privateOffer) => privateOffer.categories)
  privateOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => PrivateRequestEntity, (privateRequest) => privateRequest.categories)
  privateRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => RewardDefinitionEntity, (rewardDefinition) => rewardDefinition.categories)
  rewardDefinitions?: RewardDefinitionEntity[];

  @ManyToMany(() => InstitutionalMatchingProfileEntity, (institutionalMatchingProfile) => institutionalMatchingProfile.categories)
  institutionalMatchingProfiles?: InstitutionalMatchingProfileEntity[];

  @ManyToMany(() => PrivateMatchingProfileEntity, (privateMatchingProfile) => privateMatchingProfile.categories)
  privateMatchingProfiles?: PrivateMatchingProfileEntity[];
}
