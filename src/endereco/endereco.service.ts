import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generic/generic.service';
import { Repository } from 'typeorm';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService  extends GenericService<Endereco>{

  constructor (@InjectRepository(Endereco) repository: Repository<Endereco>){
      super(repository)
  }
}
