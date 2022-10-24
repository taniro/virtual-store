import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';

import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidoService extends GenericService<Pedido> {
    constructor(@InjectRepository(Pedido)  repository:Repository<Pedido>){
      super(repository)
    }
}
