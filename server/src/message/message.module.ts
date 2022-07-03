import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Session } from '../session/session.model';
import { Message } from './message.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [SequelizeModule.forFeature([User, Session, Message]), AuthModule],
})
export class MessageModule {}
