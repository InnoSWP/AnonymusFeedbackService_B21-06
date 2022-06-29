import { Injectable } from '@nestjs/common';
import {CreateSessionDto} from "./dto/CreateSession.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Session} from "./session.model";

@Injectable()
export class SessionService {
  constructor(@InjectModel(Session) private sessionRepository: typeof Session) {
  }

  async create(dto: CreateSessionDto) {
    const session = await this.sessionRepository.create(dto)
    session.userId = 1
    await session.save()
    return session
  }

  async getSession(id: number) {
    return this.sessionRepository.findOne({ where: {id} })
  }

  async getAllSession() {
    return this.sessionRepository.findAll()
  }

  async delete(id) {
    return this.sessionRepository.destroy({where: {id}})
  }
}
