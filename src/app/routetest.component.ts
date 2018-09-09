import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from './service';

@Component({
  selector: 'test-route',
  templateUrl: './testroute.component.html'
})
export class TestrouteComponent {

   public title:string = 'my new app';
  public src:string='https://www.telegraph.co.uk/content/dam/world-cup/2018/06/22/TELEMMGLPICT000166476247-xlarge_trans_NvBQzQNjv4BqaxhR1vC4M3eHXTZuhDlJp789H6EDpBTd03O9ZVPLJiw.jpeg';

  public ptaginnerhtml:string;
  public reacriveForm: FormGroup;
  public amount:number = 0.5;
  public date:any = new Date();
  public status:number = 1;
  public payment_status:number = 1;
  public dummydata:any;

  constructor(private fb:FormBuilder,private cmnsrvc : CommonService)
  {
    this.createForm();
    //console.log('Inside Constructor');
  }

  getDataDummyApi(): void {
    this.cmnsrvc.getDataDummyApi()
    .subscribe(dummydatafromapi => {this.dummydata = dummydatafromapi;console.log(this.dummydata)});
  }

  postDummyDataApi(): void {
    this.cmnsrvc.postDataDummyApi({title: 'foo',body: 'bar',userId: 1})
    .subscribe(postdummydatafromapi => {console.log(postdummydatafromapi)});
  }

  /* Mainly use */
  ngOnInit()
  {
    //console.log('Inside ngOnInit');
    this.getDataDummyApi();
  }

  ngAfterContentInit()
  {
    //console.log('Inside ngAfterContentInit');
  }

  ngAfterContentChecked()
  {
    //console.log('Inside ngAfterContentChecked');
  }
  /* Mainly use */
  ngAfterViewInit()
  {
    //console.log('Inside ngAfterViewInit');
  }

  ngAfterViewChecked()
  {
    //console.log('Inside ngAfterViewChecked');
  }
  /* Mainly use */
  ngOnDestroy()
  {
    //console.log('Inside ngOnDestroy');
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
