import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-listpizzas',
  standalone: true,
  imports: [],
  templateUrl: './listpizzas.component.html',
  styleUrl: './listpizzas.component.css'
})
export class ListpizzasComponent {
  constructor(private carrito:CarritoService){

  }
  handlerClick(){
    this.carrito.add({})
  }
  handlerClickCustom(){
    document.dispatchEvent(new CustomEvent('carrito',{
      bubbles:true,
      composed:true,
      detail :{}
    }))
  }

}
