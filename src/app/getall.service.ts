import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';


export class GetallService<T> {
  constructor(private http: HttpClient, private urlApi:string, private path:string) {

  }
  /*get():Observable<T>{
      return this.http.get<T>("https://jsonplaceholder.typicode.com/posts")
  }*/
  get(): Promise<T> {
    const url = `${this.urlApi}${this.path}`
    return lastValueFrom(this.http.get<T>(url))
  }
}
