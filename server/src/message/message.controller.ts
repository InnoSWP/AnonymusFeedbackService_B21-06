import {
  Body,
  Controller, Get, Param,
  Post,
  Req,
  Request,
  Sse,
  UseGuards,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto, TakeMessageDto } from './dto/message.dto';
import {InjectEventEmitter} from "nest-emitter";
import {MyEventEmitter} from "./message.events";

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('/')
  create(@Body() dto: TakeMessageDto, @Req() req: Express.Request) {
    const message = new MessageDto(Object.assign({ userId: dto.userId }, dto));
    console.log(message)
    return this.messageService.create(message)
  }

  @Get('/user/:id')
  getUserMessages(@Param('id') id: number) {
    return this.messageService.getUserMess(id);
  }

  @Get('/anonim/:id')
  getAnonimMessages(@Param('id') id: number) {
    return this.messageService.getAnonimMess(id);
  }

  @Get('/:id')
  getSessionMessages(@Param('id') id: number) {
    return this.messageService.getSessionMess(id);
  }
}
