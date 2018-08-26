import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
	public value:any = [];
	

  constructor(){

  	if(localStorage.getItem("usearr"))
	{
		this.value = JSON.parse(localStorage.getItem("usearr"));
	}
	else
	{
		this.value = [{"first_name":"Arijita5","last_name":"Rudra","username":"Arijita5","password":"123456","movie":[]}];
	}
  }

 
}

