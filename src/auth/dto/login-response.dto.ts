import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InVzZXJuYW1lMTIzIiwiaWF0IjoxNjY2MzAwNDg1LCJleHAiOjE2NjYzODY4ODV9.DLKZ0UUxBEkShihhhaKabQyq1QdNoRV_lSH1-1WRR10',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
