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
  async obtenerUnArticulo(id :string) {
    let response = this.repository.findOne(id);
    return await response;
  }
  async agregarUnArticulo(datos){
    const news = await this.repository.createNewCatalogoAvon(datos);
    return 'agregado  datos: ' + JSON.stringify(datos);
  }

  async editarUnArticulo(id, datos: any){
    let response = this.repository.update(id, datos);
    return await response;
  }
  async eliminarUnArticulo(id) {
    let response = this.repository.delete(id);
    return await response;
  }



}
