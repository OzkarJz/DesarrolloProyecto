import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateClientDTO {

    @IsString()
    @IsOptional()
    nombre: string

    @IsString()
    @IsOptional()
    direccion: string

}