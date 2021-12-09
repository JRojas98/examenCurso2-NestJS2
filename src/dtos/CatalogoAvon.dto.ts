import { IsNotEmpty, IsOptional, IsEnum, ValidateNested, IsString, IsNumber, } from 'class-validator';

export class CatalogoAvonDtos {
    @IsString()
    @IsNotEmpty()
    nombreProducto: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;
    
    @IsString()
    @IsNotEmpty()
    LugarCompra: string;
    
    @IsString()
    @IsNotEmpty()
    fechaCreacion: string;

    @IsOptional()
    ListaLugares: string[];
}