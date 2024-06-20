import { Component, OnDestroy, signal } from '@angular/core';
import { Carrito, CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnDestroy {
  constructor(private carrito:CarritoService){

    this.handlerCarrito = this.handlerCarrito.bind(this)

    document.addEventListener('carrito',this.handlerCarrito)


    this.carrito.asObservable().subscribe(this.handlerCarrito)
  }
  ngOnDestroy(): void {
    document.removeEventListener('carrito', this.handlerCarrito)
  }
  count=signal(0)

  handlerCarrito(carrito:Carrito){
    this.count.update(v=>v+1)
  }
}
