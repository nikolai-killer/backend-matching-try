import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';

@Entity('tags')
export class TagEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  /*
   * Relations
   * */
  @ManyToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.tags)
  institutionalOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.tags)
  institutionalRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => PrivateOfferEntity, (privateOffer) => privateOffer.tags)
  privateOffers?: PrivateOfferEntity[];

  @ManyToMany(() => PrivateRequestEntity, (privateRequest) => privateRequest.tags)
  privateRequests?: PrivateRequestEntity[];

  @ManyToMany(() => InstitutionalMatchingProfileEntity, (institutionalMatchingProfile) => institutionalMatchingProfile.tags)
  institutionalMatchingProfiles?: InstitutionalMatchingProfileEntity[];

  @ManyToMany(() => PrivateMatchingProfileEntity, (privateMatchingProfile) => privateMatchingProfile.tags)
  privateMatchingProfiles?: PrivateMatchingProfileEntity[];
}
