import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/generic/generic.service';


@Injectable()
export class ClienteService extends GenericService<Cliente> {

  constructor(@InjectRepository(Cliente) repository: Repository<Cliente>) {
      super(repository)
  }

  /*
  create(createClienteDto: CreateClienteDto):Promise<Cliente> {
    return this.repository.save(this.repository.create(createClienteDto));
  }

  findAll(): Promise<Cliente[]> {
    return this.repository.find();
  }

  findOne(id: number):Promise<Cliente> {
    return this.repository.findOneByOrFail( {id} );
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    this.repository.update({id}, this.repository.create(updateClienteDto))
  }

  remove(id: number) {
    this.repository.delete(id);
  }*/
}
