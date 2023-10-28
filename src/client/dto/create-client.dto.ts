import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateClientDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(10)
    nombre: string

    @IsNotEmpty()
    @IsString()
    direccion: string

}