import { Endereco } from "src/endereco/entities/endereco.entity";
import { AbstractEntity } from "src/generic/entities/abstract-entity";
import { Pedido } from "src/pedido/entities/pedido.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Cliente extends AbstractEntity {

    constructor(){
        super()
    }
    @Column()
    nome: string


    @OneToOne( () => Endereco, {cascade:true})
    @JoinColumn(({ name: "endereco_id" }))
    endereco: Endereco

    /*
    @OneToMany(()=> Pedido, (pedido) => pedido.cliente)
    pedidos: Pedido[]
    */
}
