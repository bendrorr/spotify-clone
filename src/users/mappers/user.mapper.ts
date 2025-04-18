import { UserDto, UserType } from '../dto/user.dto';
import { User } from '../schemas/user.schema';

export class UserMapper {
  static toDto(user: User): UserDto {
    return {
      username: user.username,
      email: user.email,
      type: user.type as UserType,
    };
  }

  static toEntity(dto: UserDto): Partial<User> {
    return {
      username: dto.username,
      email: dto.email,
      type: dto.type,
    };
  }
}