import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { TimerComponent } from './timer/timer.component';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ParentComponent, CalendarComponent, TimerComponent, DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pedro Hurtado'
  user = "user"
  data = [1,2,3,4,5,6]
}
