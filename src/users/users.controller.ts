import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post() create(@Body() dto: UserDto) {
        return this.usersService.create(dto);
    }

    @Get(':id') findById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

}
