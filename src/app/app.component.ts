import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { TimerComponent } from './timer/timer.component';
import { DialogComponent } from './dialog/dialog.component';
import { ServiceAService } from './service-a.service';
import { CreateService } from './create.service';
import { PostsComponent } from './posts/posts.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ListpizzasComponent } from './listpizzas/listpizzas.component';
import { LayoutComponent } from './pages/layout/layout.component';

interface Request{
  id:number,
  name:string
}

interface Request1{
  id:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
      ParentComponent,
      CalendarComponent,
      TimerComponent,
      DialogComponent,
      PostsComponent,
      CarritoComponent,
      ListpizzasComponent,
      LayoutComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  name = 'Pedro Hurtado'
  user = "user"
  data = [1,2,3,4,5,6]

  constructor(
    private service:ServiceAService,
    private create:CreateService<Request>,
    private create1:CreateService<Request1>
  ){

    this.create.add({id:1,name:'pedro'})

    this.create1.add({id:1})

  }
}
