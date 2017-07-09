import { MaxLength, IsEmail, MinLength, IsArray, IsAscii} from 'class-validator';

export class UserViewModel {

    @MaxLength(256)
    name: string;

    @IsEmail()
    email: string;

    @IsAscii()
    @MinLength(6)
    @MaxLength(72)
    password: string;

    @IsArray()
    roles: Array<string>
}