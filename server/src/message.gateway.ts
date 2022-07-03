import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";

@WebSocketGateway()
export class MessageGateway {
  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: any):void {
    console.log("here")
    this.server.emit('message', message);
  }
}
