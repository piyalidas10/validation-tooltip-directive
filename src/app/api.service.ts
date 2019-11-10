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
   * Get Form content
  */
 getFormContent() {
  // tslint:disable-next-line:no-shadowed-variable
 const promise = new Promise((resolve, reject) => {
   const apiURL = 'http://localhost:4200/assets/formcontent.json';
   return this.http.get<{frcontent: any}>(apiURL).toPromise().then(
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

   /**
   * Get Field Info message
  */
 getFieldInfoMessage() {
  // tslint:disable-next-line:no-shadowed-variable
 const promise = new Promise((resolve, reject) => {
   const apiURL = 'http://localhost:4200/assets/fieldInfoContent.json';
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
