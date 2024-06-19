import { Component,  input } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  //@Input() day:number=0
  day = input.required<number>()
}
