import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    	console.log('Request Start')
    return next.handle(req)
    .pipe(
    	
	    finalize(() => {
	    	console.log('Request End')
	    })
	);    
  }
}