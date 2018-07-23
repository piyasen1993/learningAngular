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
  
  public street_name:string = this.cmnsrvc.value.street_name;
  public dateb:string = this.cmnsrvc.value.dateb;
  public monthb:string = this.cmnsrvc.value.monthb;
  public yearb:string = this.cmnsrvc.value.yearb;
  public pin:string = this.cmnsrvc.value.pin;
  public errorfile:boolean = false;
  public types:any = ['png','jpg','jpeg'];
  public country:string = 'india';
  gettingform(form)

  {

    if(form.valid)
      console.log(form.value);
      this.cmnsrvc.value = form.value;
  }

  fileselected(event)
  {
    console.log(this.cmnsrvc.value);
    console.log(event.target.files[0]);
    var filetype = event.target.files[0].type.split('/');
    if(this.types.indexOf (filetype[1])== -1)
    {
      this.errorfile = true;
    }
    else
    {
      this.errorfile = false;
      var formdata = new FormData();
      formdata.append('image',event.target.files[0]);
    }

    

  }

}
