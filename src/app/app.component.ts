import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 Project $$';
  todaydate = new Date();
  jsonval={ name:'Gurunoor',age :'21', address:{a1:'blank',a2:'VikasPuri'}};

  months = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable  = true;
  myClickFunction(event){
    this.isavailable= !this.isavailable;
  }
  changemonths(event){
    alert("Month Changed"); 
  }
}
