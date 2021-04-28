import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  contents="";
  messages=[];
  constructor() { }
  sendMsg(){
    let messages ={
    contents: this.contents
  }
  this.messages.push(messages);
  this.clearField();
  console.log(this.messages);
}
clearField(){
  this.contents="";
}
  ngOnInit() {
  }

}
