import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: UserEntity[] = [];
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const password = createUserDto.password;
    const hash_password = await bcrypt.hash(password, bcrypt.genSaltSync());

    const word = Math.random().toString(36).substring(0, 10);
    const public_id = bcrypt.hashSync(word, bcrypt.genSaltSync());

    return this.userRepository.save({
      ...createUserDto,
      publicId: public_id,
      password: hash_password,
    });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
