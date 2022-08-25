import { Component, Input, Output ,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() liveName:any;  
  @Output() getResponseOfParent = new EventEmitter;  

  // @Output() myOutput:EventEmitter<string>= new EventEmitter();  
  name:string;
  sendToChild: string;  
  message: any;  

  getResponse($event:any) {  
    // this.liveName=this.message
    this.liveName = $event;  
  }  

  
  submit() {  
    this.sendToChild = this.liveName;
    this.liveName=null  
  } 
  // submit() {  
  //   this.sendToChild = this.name;
  //   this.name=""  
  // } 


  constructor() { }
  
  ngOnInit(): void {
  }

}


