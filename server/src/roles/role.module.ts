import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttributes {
  name: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
