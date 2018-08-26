import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from './service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'form-element',
  templateUrl: './form.component.html'
})
export class FormComponent {

  constructor(private cmnsrvc:CommonService , private router: Router){
    console.log(this.cmnsrvc);
  }
  public first_name:string = this.cmnsrvc.value[0].first_name;
  public last_name:string = this.cmnsrvc.value[0].last_name;
  public username:string = this.cmnsrvc.value[0].username;
  public password:string = this.cmnsrvc.value[0].password;
  
  //public street_name:string = this.cmnsrvc.value.street_name;
  //public dateb:string = this.cmnsrvc.value.dateb;
  //public monthb:string = this.cmnsrvc.value.monthb;
  //public yearb:string = this.cmnsrvc.value.yearb;
  //public pin:string = this.cmnsrvc.value.pin;
  //public errorfile:boolean = false;
  //public types:any = ['png','jpg','jpeg'];
  //public country:string = 'india';
  
  gettingform(form)
  {
    if(form.valid)
    {
      var firstnameIndex = this.cmnsrvc.value.findIndex(item=>item.username == form.value.username);
      if(firstnameIndex ==-1){
        this.cmnsrvc.value.push(form.value);
        localStorage.setItem("usearr", JSON.stringify(this.cmnsrvc.value));
        this.router.navigate(['/login']); 
      }
                                                                                                                      
    }
  }

  // fileselected(event)
  // {
  //   console.log(this.cmnsrvc.value);
  //   console.log(event.target.files[0]);
  //   var filetype = event.target.files[0].type.split('/');
  //   if(this.types.indexOf (filetype[1])== -1)
  //   {
  //     this.errorfile = true;
  //   }
  //   else
  //   {
  //     this.errorfile = false;
  //     var formdata = new FormData();
  //     formdata.append('image',event.target.files[0]);
  //   }

    

  // }

}
