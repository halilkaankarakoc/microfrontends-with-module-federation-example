import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AuthorizedModule } from './modules/authorized/authorized.module';
import { UnauthorizedModule } from './modules/unauthorized/unauthorized.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { ProductsModule } from './products/products.module';
import { FavoritesModule } from './favorites/favorites.module';
import { BasketModule } from './basket/basket.module';

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthorizedModule,
    UnauthorizedModule,
    AuthModule,
    ProductsModule,
    FavoritesModule,
    BasketModule,
  ],
})
export class AppModule {}
