import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MessagingService } from './services/messaging.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'push-menu';

  message: any;
  constructor(private messageService : MessagingService){}
  
  ngOnInit() {



    console.log("welcome")
    this.messageService.requestPermission();
    this.messageService.receiveMessage;
    this.message = this.messageService.currentMessage;
  }
  
}
