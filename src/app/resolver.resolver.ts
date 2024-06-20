import { Injectable, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

@Injectable({
  providedIn:'root'
})
class Service {
  async get(){
    return [1,2,3]
  }
}
export const resolverResolver: ResolveFn<number[]> =  (route, state) => {
  return inject(Service).get()
};
