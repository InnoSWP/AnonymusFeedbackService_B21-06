import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginUserDto) {
    // if (candidate) {
    //   throw new HttpException(
    //     'Пользователя с таким email существует',
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
  }

  async registration(dto: CreateUserDto) {
    const candidate = await this.usersService.getUserByEmail(dto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователя с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.usersService.createUser({
      ...dto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = {
      login: user.login,
      email: user.email,
      id: user.id,
      roles: user.roles,
    };
    return { token: this.jwtService.sign(payload) };
  }
}
