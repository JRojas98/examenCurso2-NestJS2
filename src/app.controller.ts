import { Body, Controller, Get, Param, Post, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CatalogoAvonDtos } from './dtos/CatalogoAvon.dto';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ summary: 'Obtiene todos los registros' })
  @ApiResponse({ status: 200, type: CatalogoAvonDtos })
  @Get('/catalogoAvon')
  obtenerTodo() {
    return this.appService.obtenerTodo();
  }

  @Get('/catalogoAvon/:id')
  @ApiOperation({ summary: 'Obtiene solo un registro con el id especificado' })
  @ApiResponse({ status: 200, type: CatalogoAvonDtos })
  @ApiParam({ name: 'catalogoAvonId', description: 'id del articulo' })
  @ApiNotFoundResponse({ description: 'No se encuentra' })
  obtenerUnArticulo(@Param('id') id: number) {
    return this.appService.obtenerUnArticulo(id);
  }

  @Put('/catalogoAvon/')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Agrega un nuevo dato a la collection' })
  @ApiBody({ required: true, type: CatalogoAvonDtos })
  agregarUnArticulo(@Body() data: CatalogoAvonDtos) {
    return this.appService.agregarUnArticulo(data);
  }

  @Post('/catalogoAvon/:id')
  @ApiOperation({ summary: 'Actualiza la collection el id especificado' })
  @UsePipes(ValidationPipe)
  @ApiBody({ required: true, type: CatalogoAvonDtos })
  editarUnArticulo(@Param('id') id: number, @Body() data: CatalogoAvonDtos) {
    return this.appService.editarUnArticulo(id, data);
  }

  @Get('/deleteCatalogoAvon/:id')
  @ApiOperation({ summary: 'Elimina un collection' })
  eliminarUnArticulo(@Param('id') id: number) {
    return this.appService.eliminarUnArticulo(id);
  }


}
