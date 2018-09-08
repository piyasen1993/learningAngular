import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  //template:`<h2>upload</h2>`,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 public name:any;
 public routeparams:any = {};
 public movieArr:any = [];
  constructor(private route:ActivatedRoute, private cmnsrvc:CommonService) { 
  	//console.log(this.route.params.value.username)
  	//console.log(this.route.queryParams.value)
    this.routeparams = this.route.params;
  	this.name = this.cmnsrvc.value[this.routeparams.value.user].first_name+ ' ' + this.cmnsrvc.value[this.routeparams.value.user].last_name;
    if(this.cmnsrvc.value[this.routeparams.value.user].movie)
      this.movieArr = this.cmnsrvc.value[this.routeparams.value.user].movie;
  }

  //this.name=this.route.params.value.user;
  ngOnInit() {
  }

  showmovieform(){
    console.log('Click Me');
  }

  gettingmovieform(form)
  {
    if(form.valid)
    {
      console.log(form);
      //var movie_name=form.value.movie;
      var movie_name: any= form.value.movie;
     
      console.log(movie_name);
//      this.cmnsrvc.value[this.route.params.value.user].movie{};
//      this.cmnsrvc.value[this.route.params.value.user].movie = movie_name;
      if(this.cmnsrvc.value[this.routeparams.value.user].movie)
      {
        this.cmnsrvc.value[this.routeparams.value.user].movie.push(movie_name);
      }
      else
      {
        this.cmnsrvc.value[this.routeparams.value.user].movie = [movie_name];
      }
      localStorage.setItem("usearr", JSON.stringify(this.cmnsrvc.value));
      console.log(this.cmnsrvc);
    }
  }

}
