import { Component, Provider, signal } from '@angular/core';
import { GetallService } from '../../getall.service';
import { createFactory } from '../../util/urlglobal';

interface Response{

}

const token = {provide:GetallService<Response>}
const path = 'posts'
const factory = createFactory(path)



@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [],
  providers:[
    {...token, ...factory}
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
