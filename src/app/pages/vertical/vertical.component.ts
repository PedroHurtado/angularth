import { Component, Provider, signal } from '@angular/core';
import { GetallService } from '../../getall.service';
import { createFactory } from '../../util/urlglobal';

interface Response{

}
const path = 'posts'
const factory = createFactory(path)

const provide:Provider ={...{provide:GetallService<Response>}, ...{factory}}


@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [],
  providers:[
    provide
  ],
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
