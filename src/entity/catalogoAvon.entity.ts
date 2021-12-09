import { BaseEntity, Entity, Column, ObjectIdColumn } from "typeorm";

/**
 * Entity
 */

@Entity()
export class catalogoAvon extends BaseEntity {

    /**
     * Primary Column with the id of the database
     */
    @ObjectIdColumn()
    _id: number;

    /**
     * the name product 
     */
    @Column()
    nombreProducto: string;

    /**
     * the description  
     */
    @Column()
    descripcion: string;

    /**
     * the price product 
     */
    @Column()
    precio: number;

    /**
     * the buy location  
     */
    @Column()
    LugarCompra: string;


    /**
    * the date add
    */
    @Column()
    fechaCreacion: string;

    /**
     * the date add
     */
    @Column()
    ListaLugares: string[];

}
