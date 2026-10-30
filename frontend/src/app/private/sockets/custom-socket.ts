import { Socket, SocketIoConfig } from "ngx-socket-io";
import { tokenGetter } from "../../app.module";
import { ApplicationRef, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CustomSocket extends Socket {
  constructor(appRef: ApplicationRef) {
    const config: SocketIoConfig = {
      url: 'http://localhost:3000',
      options: {
        extraHeaders: {
          Authorization: tokenGetter()
        }
      }
    };
    super(config, appRef);
  }

  reconnect() {
    this.disconnect();
    const config: SocketIoConfig = {
      url: 'http://localhost:3000',
      options: {
        extraHeaders: {
          Authorization: tokenGetter()
        }
      }
    };
    this.connect();
  }
}
