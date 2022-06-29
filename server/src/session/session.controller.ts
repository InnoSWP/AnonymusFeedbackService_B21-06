import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateSessionDto} from "./dto/CreateSession.dto";
import {SessionService} from "./session.service";

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {
  }

  @Post('/')
  create(@Body() dto: CreateSessionDto) {
    return this.sessionService.create(dto)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.sessionService.delete(id)
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.sessionService.getSession(id)
  }

  @Get('/')
  getAll() {
    return this.sessionService.getAllSession()
  }
}

