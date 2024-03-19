import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private myHttp: HttpClient) { }

  /*getData() {
    return this.myHttp.get('https://jsonplaceholder.typicode.com/users');
  }*/

  getData1() : Observable<any[]> {
        return this.myHttp.get<any[]>('https://jsonplaceholder.typicode.com/users');    
  }
  
  /*
  getData2() : Observable<any[]> {
    try {
      return await lastValueFrom(
        return this.myHttp.get<any[]>('https://jsonplaceholder.typicode.com/users');
      );
    }
    catch(e) {
      console.log('ERROR:',e);
      //return undefined;
    }
  }*/

}



