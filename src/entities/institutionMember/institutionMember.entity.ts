import { Entity, Generated, OneToMany, PrimaryColumn } from 'typeorm';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';

@Entity('institutionalMembers')
export class InstitutionMemberEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  /*
   * Relations
   * */
  @OneToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.author)
  institutionalOffersAsAuthor: InstitutionalOfferEntity[];

  @OneToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.author)
  institutionalOffersAsContactPerson: InstitutionalOfferEntity[];

  @OneToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.author)
  institutionalRequestsAsAuthor: InstitutionalRequestEntity[];

  @OneToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.author)
  institutionalRequestsAsContactPerson: InstitutionalRequestEntity[];
}
