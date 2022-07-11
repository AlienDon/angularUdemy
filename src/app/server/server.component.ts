import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
serverName: string = 'Xc-2-7.1';
serverId: number = 2311;
serverStatus: string = 'online';
}
