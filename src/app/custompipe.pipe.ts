import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, payment_status: any): any {
  	var status = '';
  	if(value==0)
  		status = 'Pending';
  	else if(value==1 && payment_status==0)
  		status = 'Pending Payment';
  	else if(value==1 && payment_status==1)
  		status = 'Complete';
  	else if(value==2)
  		status = 'Rejected';

    return status;
  }

}
