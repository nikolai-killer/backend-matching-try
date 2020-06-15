import { Column, Entity, Generated, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { AddressEntity } from '../address/address.entity';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';

@Entity('users')
export class UserEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  addressId: string;

  /*
   * Relations
   * */
  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity;

  @OneToOne(() => PrivateMatchingProfileEntity, (matchingProfile) => matchingProfile.user)
  @JoinColumn()
  matchingProfile: PrivateMatchingProfileEntity;

  @OneToMany(() => PrivateOfferEntity, (offer) => offer.user)
  offers: PrivateOfferEntity[];

  @OneToMany(() => PrivateOfferEntity, (request) => request.user)
  requests: PrivateRequestEntity[];
}
