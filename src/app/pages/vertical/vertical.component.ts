import { Component, signal } from '@angular/core';
import { GetallService } from '../../getall.service';
import { HttpClient } from '@angular/common/http';
import { URLTOKEN, deps, factory } from '../../util/urlglobal';

interface Response{

}



const path = 'posts'
@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [],
  providers:[{
    provide:GetallService<Response>,
    useFactory:factory(path),
    deps:deps
  }],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.css'
})
export class VerticalComponent {
  response = signal<Response>({})
  constructor(private service:GetallService<Response>){
    this.getData()
  }

  async getData(){
    this.response.set(await this.service.get())
  }
}
