import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() day:number =0
  @Output() changeDay = new EventEmitter<number>()

  handlerClick(){
    this.changeDay.emit(this.day)
  }
}
