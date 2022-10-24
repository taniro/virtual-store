import { Cliente } from "src/cliente/entities/cliente.entity";
import { AbstractEntity } from "src/generic/entities/abstract-entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Endereco extends AbstractEntity{
    constructor(){
        super()
    }

    
    @Column()
    rua: string

    /*
    @OneToOne( () => Cliente )
    @JoinColumn(({ name: "cliente_id" }))
    cliente: Cliente
    */
}
