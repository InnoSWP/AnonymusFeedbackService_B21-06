// app.events.ts
import { EventEmitter } from 'events';
import { StrictEventEmitter } from 'nest-emitter';

interface MessageEvents {
  message: string;
  newRequest: (req: Express.Request) => void;
}

export type MyEventEmitter = StrictEventEmitter<EventEmitter, MessageEvents>;
