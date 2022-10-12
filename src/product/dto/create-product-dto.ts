import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    description: 'nome do produto',
    example: 'Pizza portuguesa',
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'breve descrição sobre o produto',
  })
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @ApiProperty({
    description: 'preço do produto',
    example: '48.90',
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'imagem do produto',
    example: 'imagem.png',
  })
  image: string;
}
