import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[changeText]'
})
export class ChangeTextDirective {

  constructor() { 
    //console.log(Element);
    //Element.nativeElement.innerText ="Text is changed by changeText Directive.";
  }

}
