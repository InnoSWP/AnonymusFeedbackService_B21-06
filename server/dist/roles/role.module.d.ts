import { Model } from 'sequelize-typescript';
import { User } from '../users/user.model';
interface RoleCreationAttributes {
    name: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttributes> {
    id: number;
    name: string;
    description: string;
    users: User[];
}
export {};
