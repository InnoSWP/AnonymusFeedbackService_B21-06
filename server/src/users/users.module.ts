import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/role.model';
import { RolesModule } from '../roles/roles.module';
import { Session } from '../session/session.model';
import { AuthModule } from '../auth/auth.module';
import { Message } from '../message/message.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, UserRoles, Role, Session, Message]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService, UsersModule],
})
export class UsersModule {}
