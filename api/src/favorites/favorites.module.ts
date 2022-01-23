import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';

@Module({
  providers: [FavoritesService],
  exports: [FavoritesService],
  controllers: [FavoritesController]
})
export class FavoritesModule {}
