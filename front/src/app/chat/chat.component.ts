import { Component, OnInit} from '@angular/core';
import { TransferService } from '../../service/transfer.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  
  nick:string;
  mess:string;
  messagesArray:any;

  constructor(private transfer: TransferService, private router: Router) {
    this.transfer.incomingMessage()
        .subscribe(data=>{
          this.messagesArray.push(data);
    });
  }
  
  ngOnInit() {
    this.nick = this.transfer.nick;
    //проверка в случае если пользователь обновил страницу:
    if(this.nick == ""){
      this.router.navigate(['./info']);
    }
    this.transfer.getMessages();
    this.messagesArray = [];
    this.messagesArray = this.transfer.messagesArray;
    
  }

  sendMessage(){
    this.transfer.sendMessage({nick: this.nick, txt: this.mess});
    this.mess = "";
  }

}