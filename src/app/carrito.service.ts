import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface  Carrito{

}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private subject = new Subject<Carrito>
  add(carrito:Carrito){
    this.subject.next(carrito)
  }
  asObservable():Observable<Carrito>{
    return this.subject.asObservable()
  }
}
