import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Track {
  @Prop() title: string;
  @Prop() artist: string;
  @Prop() duration: number;
}

export type TrackDocument = Track & Document;
export const TrackSchema = SchemaFactory.createForClass(Track);