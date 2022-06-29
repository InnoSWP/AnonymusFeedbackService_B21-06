import { Model } from 'sequelize-typescript';
import { Role } from '../roles/role.module';
interface UserCreationAttributes {
    login: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttributes> {
    id: number;
    login: string;
    email: string;
    phone: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
}
export {};
