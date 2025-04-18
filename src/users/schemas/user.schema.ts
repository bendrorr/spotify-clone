import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserType } from '../dto/user.dto';

@Schema()
export class User {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop({ enum: UserType, default: UserType.FREE })
    type: UserType;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);