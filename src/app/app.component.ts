import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedId;
  inputSelected:boolean;
  selectedType;

  constructor(){
    this.selectedId = -1;
    this.inputSelected = false;
    this.selectedType="";
  }

  courseTypes=[
    {id:0,name:'Dev'},
    {id:1,name:'BI'},
    {id:2,name:'BA'},
    {id:3,name:'DA'}
  ];

  submit(f){
    console.log(f);
  }

  showCourseName(c){
    console.log(c);
  }

  toggleSelect(event,ngModel){
    event.stopPropagation();
    this.inputSelected = !this.inputSelected;
    console.log(ngModel);
  }

  clickItem(ct){
    this.selectedType=ct;
    this.inputSelected = false;
  }

  clickBlank(){
    this.inputSelected = false;
  }
}
