import { Component, WritableSignal, computed, effect, signal } from '@angular/core';

function getTime(date: Date) {
  let options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  private time = signal(new Date())
  timeFormat = computed(() => getTime(this.time()))
  constructor() {

    effect((onCleanup) => {

      const timer = setInterval(() => {
        this.time.set(new Date())
      }, 1000);

      onCleanup(() => {
        clearInterval(timer)
      });

    });

  }
}
