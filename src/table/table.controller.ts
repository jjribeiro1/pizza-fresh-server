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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTableDto } from './dto/create-table-dto';
import { UpdateTableDto } from './dto/update-table-dto';
import { TableService } from './table.service';

@ApiTags('table')
@Controller('table')
@UseGuards(AuthGuard())
@ApiBearerAuth()
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  create(@Body() dto: CreateTableDto) {
    return this.tableService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas',
  })
  findAll() {
    return this.tableService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar uma única mesa por id',
  })
  findOne(@Param('id') id: string) {
    return this.tableService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar uma mesa por id',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto) {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar uma mesa por id',
  })
  delete(@Param('id') id: string) {
    return this.tableService.delete(id);
  }
}
