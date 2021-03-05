import { Component } from '@angular/core';
import { MyserviceService} from './myservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms' 
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { trigger, state, style, transition, animate, AUTO_STYLE} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
  div{
  margin: 0 auto;
  text-align: center;
  width:200px;
  }
  .rotate{
  width:100px;
  height:100px;
  border:solid 1px red;
  }
`],
animations: [
trigger('myanimation',[
state('smaller',style({
transform : 'translateX(100px)'
})),
state('larger',style({
transform : 'translateX(0px)'
})),
transition('smaller <=> larger',animate('300ms ease-in'))
])
]
 })
 export class AppComponent {
  state: string = "smaller";
  animate() {
  this.state= this.state == 'larger' ? 'smaller' : 'larger';
  }
  title = 'Angular 7 Project $$';
  todaydate;
  componentproperty;
  emailid;
  public albumdetails = [];
  formdata;
  public persondata =[];
  constructor(private myservice: MyserviceService){}

  ngOnInit() {
    this.myservice.getData().subscribe((data)=>{
      this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.albumdetails);
    });
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.myservice.serviceproperty;
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
  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
    }
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
 