import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ParentComponent, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pedro Hurtado'
  user = "user"
  data = [1,2,3,4,5,6]
}
