import { Model } from 'sequelize-typescript';
import { Role } from '../roles/role.model';
import { Session } from '../session/session.model';
import { Message } from '../message/message.model';
interface UserCreationAttributes {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    name: string;
    banReason: string;
    roles: Role[];
    sessions: Session[];
    messages: Message[];
}
export {};
