import { Injectable } from '@angular/core';
import { ws } from '../../mocks/api-config';
import { Observable } from 'rxjs/Observable';
import { catchError, tap, map, retry } from 'rxjs/operators';


import { 
  HttpRequest, 
  HttpHandler, 
  HttpEvent, 
  HttpResponse, 
  HttpErrorResponse,
  HttpClient, 
  HttpHeaders 
} from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

const WEBSERVICE = ws.webservicePath();

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/x-www-form-urlencoded',
    //'Access-Control-Allow-Origin' : '*',
    'Content-Type' :  'application/json'
    //'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ApiProvider {
 
  constructor(private http : HttpClient) {
    console.log(WEBSERVICE);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.responseType == 'json') {
			const clonedRequest = req.clone({ responseType: 'text' });

      return next.handle(clonedRequest).pipe(map(response => {
				if (response instanceof HttpResponse) {
					response = response.clone<any>({ body: JSON.parse(response.body) });
				}

				return response;
			}));
    }

    return next.handle(req);
	}



  create(path : string, val : any) : Observable<any>{
    return this.http.post<any>(`${WEBSERVICE}/${path}`, val, HTTP_OPTIONS)
      .pipe(tap(  
          data => console.log(data),
          error => this.handleError(error)
      ));
  }



  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
    //return throwError(
    console.error('Something bad happened; please try again later.');
  };

  edit(path : string, val : any){
    let body = new URLSearchParams();
    return this.http.put(`${WEBSERVICE}/${path}`,body.toString(), HTTP_OPTIONS);
  }

  remove(path :  any){
    return this.http.delete(`${WEBSERVICE}/${path}`);
  }

  get(path : string) : Observable<any>{
    return this.http.get<any>(`${WEBSERVICE}/${path}`, { observe: 'response' })
      .pipe(
        tap( 
          data => {},
          error => console.log(error)
        )
      );
  }
}
