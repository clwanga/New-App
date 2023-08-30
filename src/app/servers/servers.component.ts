import { Component } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  //defining class data
  allowNewServer:boolean = true;
  serverCreationStatus:string = "No server was created";
  formInput:string;

  //class constructor
  constructor(){
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "New server was created";
  }

  onUpdateServer(event:any){
    //this.formInput = event;

    //console.log(this.formInput);
    console.log(event);
  }
}
