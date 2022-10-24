import { Controller} from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Controller('clientes')
export class ClienteController extends GenericController<Cliente>{
  constructor(service: ClienteService) {
    super (service)
  }
}
