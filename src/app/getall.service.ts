import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetallService<T> {

  constructor(private http: HttpClient) {

  }
  /*get():Observable<T>{
      return this.http.get<T>("https://jsonplaceholder.typicode.com/posts")
  }*/
  get(): Promise<T> {
    return lastValueFrom(this.http.get<T>("https://jsonplaceholder.typicode.com/posts"))
  }
}
