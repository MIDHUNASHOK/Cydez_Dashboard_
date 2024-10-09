// src/app/app.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentInput: string = '';
  parentMessage: string = '';
  childMessage:string='';

  SendParentMessage() {
    this.parentMessage = this.parentInput
    this.parentInput = ''
  }

  SendChildMessage(val:any){
this.childMessage=val
  }


}
