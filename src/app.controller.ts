import { Body, Controller, Get, Param, Post, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CatalogoAvonDtos } from './dtos/CatalogoAvon.dto';

@Controller('main')
export class AppController {
  constructor(private  appService: AppService) { }

  @ApiOperation({ summary: 'Obtiene todos los registros' })
  @ApiResponse({ status: 200})
  @Get('/catalogoAvon')
  obtenerTodo() {
    return this.appService.obtenerTodo();
  }

  @Get('/catalogoAvon/:id')
  @ApiOperation({ summary: 'Obtiene solo un registro con el id especificado' })
  @ApiResponse({ status: 200})
  @ApiParam({ name: 'catalogoAvonId', description: 'id del articulo' })
  @ApiNotFoundResponse({ description: 'No se encuentra' })
  obtenerUnArticulo(@Param('id') id: string) {
    return this.appService.obtenerUnArticulo(id);
  }

  @Put('/catalogoAvon/')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Agrega un nuevo dato a la collection' })
  @ApiBody({ required: true, type: CatalogoAvonDtos })
  @ApiResponse({ status: 200})
  agregarUnArticulo(@Body() data: CatalogoAvonDtos) {
    return this.appService.agregarUnArticulo(data);
  }

  @Post('/catalogoAvon/:id')
  @ApiResponse({ status: 200})
  @ApiOperation({ summary: 'Actualiza la collection el id especificado' })
  @UsePipes(ValidationPipe)
  @ApiBody({ required: true, type: CatalogoAvonDtos })
  editarUnArticulo(@Param('id') id: string, @Body() data: CatalogoAvonDtos) {
    return this.appService.editarUnArticulo(id, data);
  }

  @Get('/deleteCatalogoAvon/:id')
  @ApiResponse({ status: 200})
  @ApiOperation({ summary: 'Elimina un collection' })
  eliminarUnArticulo(@Param('id') id: string) {
    return this.appService.eliminarUnArticulo(id);
  }


}
