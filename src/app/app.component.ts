import { Component } from '@angular/core';
import { MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 Project $$';
  todaydate;
  componentproperty;
  public persondata =[];
  constructor(private myservice: MyserviceService){}

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.myservice.serviceproperty;
    this.myservice.getData().subscribe((data) =>{
      this.persondata = Array.from(Object.keys(data),k=>data[k]);
      console.log(this.persondata);
    });

  }

  // jsonval={ name:'Gurunoor',age :'21', address:{a1:'blank',a2:'VikasPuri'}};

  // months = ["January", "February", "March", "April", "May",
  // "June", "July", "August", "September",
  // "October", "November", "December"];
  // isavailable  = true;
  // myClickFunction(event){
  //   this.isavailable= !this.isavailable;
  // }
  // changemonths(event){
  //   alert("Month Changed"); 
  // }
}
