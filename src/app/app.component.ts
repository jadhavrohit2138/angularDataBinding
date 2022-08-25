import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // @Output() getResponseOfParent = new EventEmitter;  

  ngOnInit(): void {
  }
  title:string="";
  parentToGrandParent:string

  sendToParent: string;  

  message: any;  

  getResponse($event:any) {  
    this.message = $event;  
  }  
  submit() {  
    this.sendToParent = this.parentToGrandParent;
    this.parentToGrandParent=""  
  } 

}