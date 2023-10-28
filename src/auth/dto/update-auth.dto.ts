import { IsArray, IsBoolean, IsEmail, IsString } from "class-validator";

export class UpdateAuthDto{

    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    user: string;
    @IsString()
    name: string;
    @IsArray()
    roles: string[];
    @IsBoolean()
    isActive: boolean;

}
