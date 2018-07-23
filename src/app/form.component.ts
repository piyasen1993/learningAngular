import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from './service';

@Component({
  selector: 'form-element',
  templateUrl: './form.component.html'
})
export class FormComponent {

  constructor(private cmnsrvc:CommonService){
    console.log(this.cmnsrvc.value);
  }
  public first_name:string = this.cmnsrvc.value.first_name;
  public last_name:string = this.cmnsrvc.value.last_name;
  // public emailid:string = this.cmnsrvc.value.emailid;
  public address:string = this.cmnsrvc.value.address;
  
  gettingform(form)
  {
    if(form.valid)
  		this.cmnsrvc.value = form.value;
  }

  fileselected(event)
  {
    console.log(this.cmnsrvc.value);
    //console.log(event.target.files[0]);
    var formdata = new FormData();
    formdata.append('image',event.target.files[0]);

  }

}
