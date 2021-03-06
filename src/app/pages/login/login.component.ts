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

	//public value:any = {"firstName":"Jit"};

	constructor(private router: Router , private cmnsrvc:CommonService){
		console.log(this.cmnsrvc);
	}

	ngOnInit() {
	}
	gettingform(form)
	{
		if(form.valid){

			var firstnameIndex = this.cmnsrvc.value.findIndex(item=>item.username == form.value.username);

			var password = this.cmnsrvc.value[firstnameIndex].password;
			console.log(firstnameIndex)
			if((firstnameIndex!=-1) && (password == form.value.password) ){
				this.router.navigate(['/home',firstnameIndex]);
			}
		}
	    	
	    
	}


}
