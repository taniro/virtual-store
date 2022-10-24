import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { GenericController } from 'src/generic/generic.controller';
import { Pedido } from './entities/pedido.entity';

@Controller('pedidos')
export class PedidoController extends GenericController<Pedido> {
  constructor(pedidoService: PedidoService) {
    super(pedidoService)
  }
}
