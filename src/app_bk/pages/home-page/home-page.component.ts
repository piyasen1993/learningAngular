import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:ActivatedRoute) { 
  	//console.log(this.route.params.value)
  	//console.log(this.route.queryParams.value)
  	
  }

  ngOnInit() {
  }

}
