import { ArrayMinSize, IsArray, IsBoolean, IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength, isNotEmpty } from "class-validator"

export class CreateAuthDto {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    user: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsArray()
    @ArrayMinSize(1)
    roles: string[];

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;

}
