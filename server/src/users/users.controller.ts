import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/')
  create(@Body() userDto: LoginUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get('/')
  @UseGuards(JwtAuthGuard)
  getAll() {
    return this.usersService.getAllUsers();
  }
}
