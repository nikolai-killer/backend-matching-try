import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../institution/institution.entity';
import { MatchingEntity } from '../matching/matching.entity';
import { UserEntity } from '../user/user.entity';
import { CategoryEntity } from '../category/category.entity';
import { TagEntity } from '../tag/tag.entity';

@Entity('privateMatchingProfiles')
export class PrivateMatchingProfileEntity extends BaseEntity {
  @Column('double precision')
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  radius: number;

  @Column('character varying', { array: true })
  @IsArray()
  additionalSkills?: string[];

  @Column('text')
  @IsString()
  additionalInformation?: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  userId: string;

  /*
   * Relations
   * */
  @OneToOne(() => UserEntity, (user) => user.matchingProfile)
  user: UserEntity;

  @ManyToMany(() => CategoryEntity, (category) => category.privateMatchingProfiles)
  @JoinTable({
    name: 'privateMatchingProfiles_categories',
    joinColumn: {
      name: 'privateMatchingProfile',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories?: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.privateMatchingProfiles)
  @JoinTable({
    name: 'privateMatchingProfiles_tags',
    joinColumn: {
      name: 'privateMatchingProfile',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag',
      referencedColumnName: 'id'
    }
  })
  tags?: TagEntity[];
}
