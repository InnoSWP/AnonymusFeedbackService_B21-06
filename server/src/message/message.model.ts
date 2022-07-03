import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Session } from '../session/session.model';

interface MessageCreationAttributes {
  value: string;
  sessionId: number;
  userId?: number;
  anonim?: number;
  anonimName?: string;
}

@Table({ tableName: 'message' })
export class Message extends Model<Message, MessageCreationAttributes> {
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
  })
  value: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  anonim: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  anonimName: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @ForeignKey(() => Session)
  @Column({
    type: DataType.INTEGER,
  })
  sessionId: number;

  @BelongsTo(() => Session, 'sessionId')
  session: Session;
}
