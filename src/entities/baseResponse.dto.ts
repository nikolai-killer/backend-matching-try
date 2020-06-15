import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class BaseResponseDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  id: string;

  @ApiProperty({ type: Date })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ type: Date })
  @IsDate()
  updatedAt: Date;
}
