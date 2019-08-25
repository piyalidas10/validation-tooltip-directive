import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

   /**
   * Get Form validation error message
  */
 getValidationErrorMessage() {
  // tslint:disable-next-line:no-shadowed-variable
 const promise = new Promise((resolve, reject) => {
   const apiURL = 'http://localhost:4201/assets/validationerrors.json';
   return this.http.get<{vlderrors: any}>(apiURL).toPromise().then(
     res => {
       resolve(res);
     },
     msg => {
       reject(msg);
     }
   );
 });
 return promise;
}

}
