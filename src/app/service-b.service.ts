import { Injectable, Inject } from '@angular/core';
import { URLTOKEN } from './util/urlglobal';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor(@Inject(URLTOKEN) private url: string) {
    console.log(this.url)
    console.log("constructor b")
  }
  writer(){
    console.log("writer b")
  }
}
