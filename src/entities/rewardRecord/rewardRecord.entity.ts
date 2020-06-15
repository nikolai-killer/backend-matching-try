import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsUUID } from 'class-validator';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../institution/institution.entity';
import { MatchingEntity } from '../matching/matching.entity';

@Entity('rewardRecord')
export class RewardRecordEntity extends BaseEntity {
  @Column('double precision')
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  points: number;

  @Column()
  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  @Column('enum', { enum: ClientType })
  @IsNotEmpty()
  @IsEnum(ClientType)
  receiverType: ClientType;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  verifyingInstitutionId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  rewardReceiverId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  matchingId: string;

  /*
   * Relations
   * */
  @ManyToOne(() => InstitutionEntity, (institution) => institution.verifiedRewardRecords)
  verifyingInstitution: InstitutionEntity;

  @OneToOne(() => MatchingEntity)
  matching?: MatchingEntity;
}
