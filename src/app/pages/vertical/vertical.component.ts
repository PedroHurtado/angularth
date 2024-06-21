import { Component, Provider, signal } from '@angular/core';
import { GetallService } from '../../getall.service';
import { useProvide } from '../../util/urlglobal';

interface Response{
  id:string
}

@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [],
  providers:[
    useProvide(GetallService<Response>, "posts")
  ],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.css'
})
export class VerticalComponent {
  response!:Response;
  constructor(private service:GetallService<Response>){
    this.getData()
  }

  async getData(){
    this.response = await this.service.get();
  }
}
