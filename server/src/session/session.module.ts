import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Session } from './session.model';
import { Message } from '../message/message.model';
import { AuthModule } from "./../auth/auth.module";

@Module({
  controllers: [SessionController],
  providers: [SessionService],
  imports: [SequelizeModule.forFeature([User, Session, Message]), AuthModule],
})
export class SessionModule {}
