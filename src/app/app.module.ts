import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from '../table/table.module';
import { ProductModule } from '../product/product.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [TableModule, ProductModule, UserModule, OrderModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
