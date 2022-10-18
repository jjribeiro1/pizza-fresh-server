import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: '15129db1-06cd-4e33-9b8e-43f36203b82d',
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
      '2ed88c7a-57f5-4735-9364-e1267e17d72d',
      'f35cac2e-a016-4423-bf25-e876ed101b93',
    ],
  })
  products: string[];
}
