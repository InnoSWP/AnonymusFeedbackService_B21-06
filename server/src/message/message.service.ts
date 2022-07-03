import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './message.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message) private messageRepository: typeof Message,
  ) {}

  async create(dto: MessageDto) {
    return this.messageRepository.create(dto);
  }

  async getUserMess(id: number) {
    return this.messageRepository.findAll({where: { userId: id }})
  }

  async getAnonimMess(id: number) {
    return this.messageRepository.findAll({where: { anonim: id }})
  }

  async getSessionMess(id: number) {
    return this.messageRepository.findAll({where: { sessionId: id }, include: { all: true }})
  }
}
