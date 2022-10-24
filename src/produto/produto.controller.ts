import { Controller} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { GenericController } from 'src/generic/generic.controller';
import { Produto } from './entities/produto.entity';

@Controller('produtos')
export class ProdutoController extends GenericController<Produto>{
  constructor( service: ProdutoService) {
    super(service)
  }

}
