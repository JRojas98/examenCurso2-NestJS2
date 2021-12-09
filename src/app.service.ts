import { Body, Injectable } from '@nestjs/common';
import { CatalogoAvonDtos } from './dtos/CatalogoAvon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CatalogoAvonRepository } from './repositorys/CatalogoAvon.repository';
@Injectable()
export class AppService {

  constructor(
    @InjectRepository(CatalogoAvonRepository)
    private repository: CatalogoAvonRepository
  ) { }


  async obtenerTodo() {
    let response = this.repository.find({});
    return await response;
  }
  async obtenerUnArticulo(id :number) {
    let response = this.repository.find({`_id:`});
    return await response;
  }
  async agregarUnArticulo(datos){
    const news = await this.repository.createNewCatalogoAvon(datos);
    return 'agregado  datos: ' + JSON.stringify(datos);
  }

  editarUnArticulo(id, datos): any {
    return 'actualizar: ' + id + ' datos: ' + JSON.stringify(datos);
  }
  eliminarUnArticulo(id): string {
    return 'elimindo';
  }



}
