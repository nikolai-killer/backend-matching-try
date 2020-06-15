import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryEntity } from './entities/category/category.entity';
import { AddressEntity } from './entities/address/address.entity';
import { InstitutionEntity } from './entities/institution/institution.entity';
import { InstitutionAdminEntity } from './entities/institutionAdmin/institutionAdmin.entity';
import { InstitutionalItemEntity } from './entities/institutionalItem/institutionalItem.entity';
import { InstitutionalMatchingProfileEntity } from './entities/institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { UserEntity } from './entities/user/user.entity';
import { InstitutionalOfferEntity } from './entities/institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from './entities/institutionalRequest/institutionalRequest.entity';
import { BaseEntity } from './entities/base.entity';
import { MatchingEntity } from './entities/matching/matching.entity';
import { PrivateItemEntity } from './entities/privateItem/privateItem.entity';
import { PrivateMatchingProfileEntity } from './entities/privateMatchingProfile/privateMatchingProfile.entity';
import { PrivateOfferEntity } from './entities/privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from './entities/privateRequest/privateRequest.entity';
import { RewardDefinitionEntity } from './entities/rewardDefinition/rewardDefinition.entity';
import { RewardRecordEntity } from './entities/rewardRecord/rewardRecord.entity';
import { TagEntity } from './entities/tag/tag.entity';
import { InstitutionTypeEntity } from './entities/institutionType/institutionType.entity';
import { InstitutionMemberEntity } from './entities/institutionMember/institutionMember.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { GetCategoryDto, GetCategoryWithRelationsDto } from './entities/category/responses.dto';
import { CreateCategoryDto } from './entities/category/requests.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "test",
    uuidExtension: "pgcrypto",
    entities: [AddressEntity, CategoryEntity,InstitutionEntity,InstitutionAdminEntity, InstitutionalItemEntity,InstitutionalMatchingProfileEntity,UserEntity,
      InstitutionalOfferEntity,InstitutionalRequestEntity,InstitutionMemberEntity,InstitutionTypeEntity,MatchingEntity, InstitutionTypeEntity,
      MatchingEntity, PrivateItemEntity, PrivateMatchingProfileEntity, PrivateOfferEntity, PrivateRequestEntity, RewardDefinitionEntity, RewardRecordEntity, TagEntity,
      BaseEntity, GetCategoryDto, GetCategoryWithRelationsDto, CreateCategoryDto],
    synchronize: true
  }),CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
