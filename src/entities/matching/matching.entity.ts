import { IsBoolean, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../institution/institution.entity';
import { ItemType } from '../../enums/ItemType.enum';

@Entity('matchings')
export class MatchingEntity extends BaseEntity {
  @Column('enum', { enum: ClientType })
  @IsNotEmpty()
  @IsEnum(ClientType)
  clientType: ClientType;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  clientId: string;

  @Column('enum', { enum: ItemType })
  @IsNotEmpty()
  @IsEnum(ItemType)
  itemType: ItemType;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  itemId: string;

  @Column('enum', { enum: ClientType })
  @IsNotEmpty()
  @IsEnum(ClientType)
  rewardReceiverType: ClientType;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  rewardReceiverId: string;
}
