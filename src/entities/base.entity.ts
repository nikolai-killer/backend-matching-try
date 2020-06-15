import { CreateDateColumn, Generated, PrimaryColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  readonly id: string;

  @CreateDateColumn({ nullable: true })
  readonly createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  readonly updatedAt: Date;
}
