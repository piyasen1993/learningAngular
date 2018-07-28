import { Directive , ElementRef , HostListener , Input} from '@angular/core';

@Directive({
  selector: '[appNewdirective]'
})
export class NewdirectiveDirective {

  constructor(private el:ElementRef) {
  	console.log(this.el);
  	el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('passvalue') mynewvalue : string;
  @Input() appNewdirective : string;

  @HostListener('mouseenter') onMouseEnter(){
  	this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
  	this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('click') onClick(){
  	this.el.nativeElement.style.backgroundColor = 'green';
  	this.el.nativeElement.innerHTML = this.appNewdirective+this.mynewvalue;
  }


}
