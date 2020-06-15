import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { TagEntity } from '../tag/tag.entity';
import { CategoryEntity } from '../category/category.entity';
import { PrivateItemEntity } from '../privateItem/privateItem.entity';
import { UserEntity } from '../user/user.entity';
import { RewardDefinitionEntity } from '../rewardDefinition/rewardDefinition.entity';

@Entity('privateRequests')
export class PrivateRequestEntity extends PrivateItemEntity {
  /*
   * Relations
   * */
  @ManyToMany(() => CategoryEntity, (category) => category.privateRequests)
  @JoinTable({
    name: 'privateRequests_categories',
    joinColumn: {
      name: 'privateRequest',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.privateRequests)
  @JoinTable({
    name: 'privateRequests_tags',
    joinColumn: {
      name: 'privateRequest',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag',
      referencedColumnName: 'id'
    }
  })
  tags?: TagEntity[];

  @ManyToOne(() => UserEntity, (user) => user.requests)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => RewardDefinitionEntity, (rewardDefinition) => rewardDefinition.privateRequests)
  @JoinColumn()
  rewardDefinition: RewardDefinitionEntity;
}
