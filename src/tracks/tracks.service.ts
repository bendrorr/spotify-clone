import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model } from 'mongoose';
import { TrackDto } from './dto/track.dto';
import { TrackMapper } from './mappers/track.mapper';

@Injectable()
export class TracksService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>) { }

    async create(trackDto: TrackDto): Promise<TrackDto> {
        const trackEntity = TrackMapper.toEntity(trackDto);
        const createdTrack = new this.trackModel(trackEntity);
        const savedTrack = await createdTrack.save();
        return TrackMapper.toDto(savedTrack);

    }

    async findAll(): Promise<Track[]> {
        return this.trackModel.find().exec();
    }

    async findById(id: string): Promise<TrackDto> {
        const track = await this.trackModel.findById(id).exec();
        if (!track) throw new NotFoundException('Track not found');
        return TrackMapper.toDto(track);
    }

    async update(id: string, trackDto: TrackDto): Promise<TrackDto> {
        const trackUpdated = await this.trackModel.findByIdAndUpdate(id, trackDto, { new: true }).exec();
        if (!trackUpdated) throw new NotFoundException('Track not found');
        return TrackMapper.toDto(trackUpdated);

    }

    async delete(id: string): Promise<void> {
        const result = await this.trackModel.findByIdAndDelete(id).exec();
        if (!result) throw new NotFoundException('Track not found');

    }
}
