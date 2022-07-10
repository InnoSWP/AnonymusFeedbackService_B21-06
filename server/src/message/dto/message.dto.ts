export class MessageDto {
  constructor(props) {
    this.value = props.value;
    this.userId = props.userId;
    this.sessionId = props.sessionId;
    this.anonim = props.anonim;
    this.anonimName = props.anonimName;
    if (props.isProfessor) {
      this.isProfessor = props.isProfessor;
    }
    this.rate = props.rate;
  }

  readonly value: string;
  readonly userId: number;
  readonly sessionId: number;
  readonly anonim?: number;
  readonly anonimName?: string;
  readonly rate?: number;
  readonly isProfessor?: boolean = false;
}

export class TakeMessageDto {
  readonly value: string;
  readonly sessionId: number;
  readonly userId?: number;
  readonly anonim?: number;
  readonly anonimName?: string;
  readonly rate?: number;
}
