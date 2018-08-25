import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public value:any = {"firstName":"Jit"};

	constructor(private router: Router , private cmnsrvc:CommonService){
	//console.log(this.cmnsrvc);
	}
	//public first_name:string = this.value.firstName;
	public first_name:string = this.cmnsrvc.value.first_name;

	ngOnInit() {
	}
	gettingform(form)
	{
		if(form.valid)
	    	this.router.navigate(['/home',1,'customer'],{queryParams:{'id':121212}});
	    
	}


}
