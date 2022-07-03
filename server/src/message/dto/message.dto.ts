export class MessageDto {
  constructor(props) {
    this.value = props.value;
    this.userId = props.userId;
    this.sessionId = props.sessionId;
  }

  readonly value: string;
  readonly userId: number;
  readonly sessionId: number;
}

export class TakeMessageDto {
  readonly value: string;
  readonly sessionId: number;
  readonly userId?: number;
  readonly anonimus?: number;
  readonly anonimusName?: string;
}
