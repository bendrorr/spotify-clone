import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TrackDto } from './dto/track.dto';

@Controller('tracks')
export class TracksController {
    constructor(private readonly tracksService: TracksService) { }

    @Post()
    create(@Body() trackDto: TrackDto) {
        return this.tracksService.create(trackDto);
    }

    @Get()
    findAll() {
        return this.tracksService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.tracksService.findById(id);

    }

    @Put(':id') 
    update(@Param('id') id: string, @Body() trackDto: TrackDto){
        return this.tracksService.update(id, trackDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.tracksService.delete(id);
    }
}
