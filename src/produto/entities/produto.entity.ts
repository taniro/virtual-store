import { AbstractEntity } from "src/generic/entities/abstract-entity";
import { Column, Entity } from "typeorm";


@Entity()
export class Produto extends AbstractEntity{

    @Column()
    nome: string

    @Column()
    descricao: string
}
