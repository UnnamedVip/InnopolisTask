import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable} from "rxjs";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  //private socket= io('http://localhost:3000/');
  private socket= io(environment.server_url);
  messagesArray:any = []; //массив полученных данных
  nick:string = "";
  
  //заполнение массива при первой загрузке:
  getMessages():any {
    this.socket.on('allMass',(data)=>{
      this.messagesArray = [];
      for(let i = 0; i < data.length;i++){
        this.messagesArray.push({'nick': data[i].nick, 'txt': data[i].txt});
      } 
    });
  }

  sendMessage (data) {
    this.socket.emit('message',{nick:data.nick, txt:data.txt});
  }

  incomingMessage(){
    let observable = new Observable(observer=>{
        this.socket.on('new message', (data)=>{
            observer.next(data);
        });
        return () => {this.socket.disconnect();}
    });

    return observable;
}

}
