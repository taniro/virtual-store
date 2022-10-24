import { Controller} from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { GenericController } from 'src/generic/generic.controller';
import { Endereco } from './entities/endereco.entity';

@Controller('endereco')
export class EnderecoController extends GenericController<Endereco> {
  constructor(service: EnderecoService) {
    super (service)
  }
}
