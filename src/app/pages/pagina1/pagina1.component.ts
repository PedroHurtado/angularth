import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component implements OnInit, OnDestroy {
  name=''
  constructor(){
    console.log("constructor")
    this.handlerClick = this.handlerClick.bind(this)
  }
  ngOnInit(): void {
    document.addEventListener('click',this.handlerClick)
    console.log("init")
  }
  handlerClick(){
    this.name ="Pedro"
    console.log(this.name)
  }
  ngOnDestroy(): void {
    document.removeEventListener('click',this.handlerClick)
    console.log("destroy")
  }

}
