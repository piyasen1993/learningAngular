import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 public name:any;
  constructor(private route:ActivatedRoute, private cmnsrvc:CommonService) { 
  	//console.log(this.route.params.value.username)
  	//console.log(this.route.queryParams.value)
  	this.name = this.cmnsrvc.value[this.route.params.value.user].first_name+ ' ' + this.cmnsrvc.value[this.route.params.value.user].last_name;

  }

  //this.name=this.route.params.value.user;
  ngOnInit() {
  }

}
