import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  @Post('/registration')
  registration(@Body() dto: LoginUserDto) {
    return this.authService.registration(dto);
  }

  @Get('/check')
  check(@Req() req: Request) {
    console.log(req.headers)
    // @ts-ignore
    return this.authService.isTokenValid(req.headers.authorization.split(' ')[1])
  }
}
