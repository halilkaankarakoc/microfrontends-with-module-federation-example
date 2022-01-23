import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';

@Module({
  providers: [BasketService],
  exports: [BasketService],
  controllers: [BasketController]
})
export class BasketModule {}
