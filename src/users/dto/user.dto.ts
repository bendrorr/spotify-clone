import { IsEnum, IsNotEmpty } from 'class-validator';

export enum UserType {
    FREE = 'free',
    PREMIUM = 'premium',
    BLOCKED = 'blocked',
}

export class UserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    email: string;

    @IsEnum(UserType)
    type: UserType;
}