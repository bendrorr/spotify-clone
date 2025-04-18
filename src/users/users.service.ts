import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { UserMapper } from './mappers/user.mapper';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async create(dto: UserDto): Promise<User> {
        const user = new this.userModel(dto);
        const userSaved = await user.save();
        return UserMapper.toDto(userSaved);
    }

    async findById(id: string): Promise<User> {
        const user = await this.userModel.findById(id).exec();
        if (!user) throw new NotFoundException('User not found');
        return UserMapper.toDto(user);
    }
}
