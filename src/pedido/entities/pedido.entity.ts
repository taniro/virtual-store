import { Cliente } from "src/cliente/entities/cliente.entity";
import { AbstractEntity } from "src/generic/entities/abstract-entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";


@Entity()
export class Pedido extends AbstractEntity {

    @Column()
    dataPedido: Date

    @Column()
    descricao: string

    @ManyToOne(() => Cliente/*, (cliente)=> cliente.pedidos*/)
    @JoinColumn(({ name: "cliente_id" }))
    cliente: Cliente

    @ManyToMany(()=> Produto)
    @JoinTable()
    produtos: Produto[]
}
