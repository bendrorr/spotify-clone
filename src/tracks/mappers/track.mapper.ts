import { TrackDto } from "../dto/track.dto";
import { Track } from "../schemas/track.schema";

export class TrackMapper {

    static toDto(track: Track): TrackDto {
        return {
            title: track.title,
            artist: track.artist,
            duration: track.duration
        };

    }
    static toEntity(trackDto: TrackDto): Partial<Track> {
        return {
            title: trackDto.title,
            artist: trackDto.artist,
            duration: trackDto.duration
        };

    }
}