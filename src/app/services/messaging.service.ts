import { Injectable } from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/compat/messaging';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging:any) => {
        console.log(_messaging)
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
   }

   requestPermission() {
     console.log("inside");
     console.log('[./firebase-messaging-sw.js]')
   
     this.angularFireMessaging.requestToken.subscribe(
       (token:any) => {
         
         console.log(token);
       }
     )
   }

   receiveMessage() {
     this.angularFireMessaging.messages.subscribe(
       (payload:any) => {
         console.log("Message Received - ", payload);
         this.currentMessage.next(payload);
       }
     )
   }
}
