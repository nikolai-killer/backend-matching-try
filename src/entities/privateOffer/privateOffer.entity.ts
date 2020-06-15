import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { TagEntity } from '../tag/tag.entity';
import { CategoryEntity } from '../category/category.entity';
import { PrivateItemEntity } from '../privateItem/privateItem.entity';
import { UserEntity } from '../user/user.entity';
import { RewardDefinitionEntity } from '../rewardDefinition/rewardDefinition.entity';

@Entity('privateOffers')
export class PrivateOfferEntity extends PrivateItemEntity {
  /*
   * Relations
   * */
  @ManyToMany(() => CategoryEntity, (category) => category.privateOffers)
  @JoinTable({
    name: 'privateOffers_categories',
    joinColumn: {
      name: 'privateOffer',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.privateOffers)
  @JoinTable({
    name: 'privateOffers_tags',
    joinColumn: {
      name: 'privateOffer',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag',
      referencedColumnName: 'id'
    }
  })
  tags?: TagEntity[];

  @ManyToOne(() => UserEntity, (user) => user.offers)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => RewardDefinitionEntity, (rewardDefinition) => rewardDefinition.privateOffers)
  @JoinColumn()
  rewardDefinition: RewardDefinitionEntity;
}
