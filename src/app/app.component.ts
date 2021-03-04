import { Component } from '@angular/core';
import { MyserviceService} from './myservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms' 
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 Project $$';
  todaydate;
  componentproperty;
  emailid;
  formdata;
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
    this.formdata = new FormGroup({
      emailid: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("[^@]*@[^@]*")
      ])),
      passwd: new FormControl("",this.passwordValidate)
    });
  }
  passwordValidate(formcontrol){
    if(formcontrol.value.length < 5){
      return {"passwd": true };
    }
  }
  onClickSubmit(data){
    this.emailid=data.emailid;
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
