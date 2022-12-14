import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { EnderecoModule } from './endereco/endereco.module';
import { Endereco } from './endereco/entities/endereco.entity';
import { Pedido } from './pedido/entities/pedido.entity';
import { PedidoModule } from './pedido/pedido.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'auladbjs',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [Cliente, Endereco, Pedido, Produto],
      synchronize: true,
      logging: true,
    }),
    ClienteModule,
    EnderecoModule,
    PedidoModule,
    ProdutoModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthModule],
})
export class AppModule {}
