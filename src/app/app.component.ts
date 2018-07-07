import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'my new app';
  public src:string='https://www.telegraph.co.uk/content/dam/world-cup/2018/06/22/TELEMMGLPICT000166476247-xlarge_trans_NvBQzQNjv4BqaxhR1vC4M3eHXTZuhDlJp789H6EDpBTd03O9ZVPLJiw.jpeg';

  public ptaginnerhtml:string;
  public reacriveForm: FormGroup;

  constructor(private fb:FormBuilder)
  {
  	this.createForm();
  }

  createForm ()
  {
  	this.reacriveForm = this.fb.group({
  		name:['Jit Dhar'],
  		address:this.fb.group({
  			street: '',
	        city: '',
	        state: '',
	        zip: ''
  		}),	
  	})
  }	

  showconsole(){
  	console.log('Click Me');
  } 

  onSubmit(){
  	console.log('Reactive form submit');
  	console.log(this.reacriveForm.value);
  }

 
}
