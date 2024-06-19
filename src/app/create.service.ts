import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService<T> {

  constructor() { }
  add(entity:T){
    console.log(JSON.stringify(entity))
  }
}
