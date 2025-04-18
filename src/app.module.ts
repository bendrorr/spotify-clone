import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TracksModule } from './tracks/tracks.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/spotify-clone'),
    TracksModule,
  ],
})
export class AppModule { }