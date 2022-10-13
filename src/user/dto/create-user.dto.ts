import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário utilizado para login, deve ser único',
    example: 'username123',
  })
  nickname: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha de usuário para login',
    example: 'Abcd123@',
  })
  password: string;

  // @ApiProperty({
  //   description: 'A confirmação da senha deve ser igual a senha',
  //   example: 'Abcd@123@',
  // })
  // confirmPassword: string;

  @IsString()
  @ApiProperty({
    description: 'Nome próprio do usuário, apenas para exibição',
    example: 'João Vitor',
  })
  name: string;

  @IsUrl()
  @ApiProperty({
    description: 'Foto do usuário',
    example: 'https://avatars.githubusercontent.com/u/103435236?v=4',
  })
  image: string;
}
