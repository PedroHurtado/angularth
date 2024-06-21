import { Component, Provider, signal } from '@angular/core';
import { GetallService } from '../../getall.service';
import { useProvide } from '../../util/urlglobal';

interface Response{
  id:string
}
interface Foo{

}

@Component({
  selector: 'app-vertical',
  standalone: true,
  imports: [],
  providers:[
    useProvide<typeof GetallService<Response>>(GetallService<Response>, "posts"),
    //useProvide<typeof GetallService<Foo>>(GetallService<Foo>, "foo")
  ],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.css'
})
export class VerticalComponent {
  response!:Response;
  constructor(
    private service:GetallService<Response>,
    //private serviceFoo :GetallService<Foo>

  ){
    //this.serviceFoo;
    this.getData()
  }

  async getData(){
    this.response = await this.service.get();
  }
}
