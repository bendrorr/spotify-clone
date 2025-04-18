import { IsNotEmpty, isNotEmpty } from "class-validator";

export class TrackDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    artist: string;
    @IsNotEmpty()
    duration: number;
}

