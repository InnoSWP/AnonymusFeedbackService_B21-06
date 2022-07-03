import {Body, Controller, Delete, Get, Param, Post, Req, Request, UseGuards} from '@nestjs/common';
import {CreateSessionDto} from "./dto/CreateSession.dto";
import {SessionService} from "./session.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {
  }

  @Post('/')
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateSessionDto, @Req() req: Request) {
    // @ts-ignores
    const id = req.user.id
    return this.sessionService.create(dto, id);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.sessionService.delete(id)
  }

  @Get('/get-my-session')
  @UseGuards(JwtAuthGuard)
  getMy(@Req() req: Request) {
    // @ts-ignore
    const id = req.user.id;
    return this.sessionService.getMySession(id)
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.sessionService.getSession(Number(id))
  }

  @Get('/')
  getAll() {
    return this.sessionService.getAllSession()
  }
}

