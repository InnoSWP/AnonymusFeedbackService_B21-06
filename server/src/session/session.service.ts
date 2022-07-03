import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateSessionDto } from './dto/CreateSession.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Session } from './session.model';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session) private sessionRepository: typeof Session,
  ) {}

  async create(dto: CreateSessionDto, id) {
    const session = await this.sessionRepository.create(dto);
    session.userId = id;
    console.log(session)
    await session.save();
    return session;
  }

  async getSession(id: number) {
    const session = await this.sessionRepository.findOne({
      where: { id },
      include: { all: true },
    })
    if (!session) {
      throw new NotFoundException('Таких сессий нет!')
    }
    return this.sessionRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async getAllSession() {
    return this.sessionRepository.findAll();
  }

  async getMySession(id: number) {
    return this.sessionRepository.findAll({ where: { userId: id } });
  }

  async delete(id) {
    return this.sessionRepository.destroy({ where: { id } });
  }
}
