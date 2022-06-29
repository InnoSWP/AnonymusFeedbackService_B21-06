import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/')
  create(@Body() userDto: LoginUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get('/')
  getAll() {
    return this.usersService.getAllUsers();
  }
}
