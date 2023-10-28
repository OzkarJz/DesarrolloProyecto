import { ArrayMinSize, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength, isNotEmpty } from "class-validator"

export class LoginAuthDto {

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    user: string;

}
