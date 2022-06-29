import {
  BelongsToMany,
  Column,
  DataType, HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from '../roles/role.model';
import {Session} from "../session/session.model";

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: "Anonimus",
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Session)
  sessions: Session[];
}
