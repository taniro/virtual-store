import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService extends GenericService<Produto>{
    constructor(@InjectRepository(Produto) repository: Repository<Produto>){
      super(repository)
    }
}
