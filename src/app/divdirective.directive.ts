import { Directive , ElementRef , HostListener , Input} from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appdivdirective]'
})

export class DivdirectiveDirective {

  	constructor(private dv:ElementRef) {
  		console.log(this.dv.nativeElement)
  	
  		//console.log(this.dv.nativeElement.children);
  	}
  	ngOnInit(){
  		var that = this;

   		/* Call Angular Function From  Normal Function*/

   		// $(this.dv.nativeElement.children[1]).bind('click',function(){
   		// 	that.changeColor()
   		// })

   		/* Call Angular Function with arrow function */

   		$(this.dv.nativeElement.children[1]).bind('click',()=>{
   			this.changeColor()
   		})
  	}

  	changeColor() {
  		this.dv.nativeElement.children[0].style.backgroundColor = 'red';
	    this.dv.nativeElement.children[0].innerHTML = "OK";
  	}



}
