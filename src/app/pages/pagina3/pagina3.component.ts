import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [],
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component {
  constructor(private router:ActivatedRoute){
    //console.log(this.router.snapshot.data)
    //console.log(this.router.snapshot.queryParams)
    this.router.data.subscribe(v=>console.log(v['0']))
  }
}
