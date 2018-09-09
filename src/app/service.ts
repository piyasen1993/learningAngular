import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
	public value:any = [];
	

  constructor(private http: HttpClient){

  	if(localStorage.getItem("usearr"))
	{
		this.value = JSON.parse(localStorage.getItem("usearr"));
	}
	else
	{
		this.value = [{"first_name":"Arijita5","last_name":"Rudra","username":"Arijita5","password":"123456","movie":[]}];
	}
  }

  getDataDummyApi (): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        tap(dummydata => console.log('fetched heroes')),
        catchError(this.handleError('getDummy', []))
      );
  }

  postDataDummyApi (data): Observable<any> {
  	let httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts',data,httpOptions)
      .pipe(
        tap(postDummyData => console.log('fetched')),
        catchError(this.handleError('postDummy', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
}

