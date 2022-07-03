import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Message } from '../message/message.model';

interface SessionCreationAttributes {
  TitleCourse: string;
  TitleSession: string;
  year: number;
  month: number;
  day: number;
}

@Table({ tableName: 'session' })
export class Session extends Model<Session, SessionCreationAttributes> {
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
  TitleCourse: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  TitleSession: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'In Proccess',
    allowNull: true,
  })
  status: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  month: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  day: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  started: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  ended: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Message, { onDelete: 'cascade' })
  messages: Message[];
}
