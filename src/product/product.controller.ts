import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os produtos',
  })
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get('/:id')
  @ApiOperation({
    summary: 'Buscar um produto por id',
  })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um produto',
  })
  create(@Body() dto: CreateProductDto): Promise<Product> {
    return this.productService.create(dto);
  }

  @Patch('/:id')
  @ApiOperation({
    summary: 'Atualizar um produto por id',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um produto por id',
  })
  delete(@Param('id') id: string) {
    this.productService.delete(id);
  }
}
