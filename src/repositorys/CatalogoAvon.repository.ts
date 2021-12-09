import { EntityRepository, MongoRepository } from "typeorm";
import { InternalServerErrorException, Logger, Res } from '@nestjs/common';
import { catalogoAvon } from '../entity/catalogoAvon.entity';
import { CatalogoAvonDtos} from '../dtos/CatalogoAvon.dto';

@EntityRepository(catalogoAvon)

export class CatalogoAvonRepository extends MongoRepository<catalogoAvon>{

    /**
     * Logger variable
     */
    private logger = new Logger ('CatalogoAvonRepository');

    /**
     * create a new point
     * @param newCatalogoAvon DTO for new catalogo 
     */

    async createNewCatalogoAvon(data: CatalogoAvonDtos){
        const {nombreProducto, descripcion,precio,LugarCompra,fechaCreacion, ListaLugares} = data;
        const articulo = new catalogoAvon();
        articulo.nombreProducto = nombreProducto;
        articulo.descripcion = descripcion;
        articulo.precio = precio;
        articulo.LugarCompra = LugarCompra;
        articulo.fechaCreacion = fechaCreacion;
        articulo.ListaLugares = ListaLugares;
        return await articulo.save();
    }


    obtenerTodo(){}
    obtenerUnArticulo(){}
    agregarUnArticuloeditarUnArticulo(){}
    eliminarUnArticulo(){}
}