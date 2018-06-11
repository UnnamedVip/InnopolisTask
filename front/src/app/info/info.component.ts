import { Component, OnInit} from '@angular/core';
import { TransferService } from '../../service/transfer.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private transfer: TransferService, private router: Router) { }
  
  ngOnInit() {
  }

  onEnterNick(nick:string){
    if(nick != undefined){
      this.transfer.nick = nick;
      this.router.navigate(['./chat']);
    }else{
      alert("Enter your NickName");
    }
  }

}
