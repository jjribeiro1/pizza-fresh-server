import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: '8c90e568-df97-40c2-9b6b-3eee01a06a95',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa que está realizando o pedido',
    example: '3',
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista de ID dos produtos que estão no pedido',
    example: [
      '4413150a-cb42-4ae3-b39e-90f04b2817cc',
      'c713619c-327e-44f2-984e-148861125897',
    ],
  })
  products: string[];
}
