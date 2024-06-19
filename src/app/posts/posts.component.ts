import { Component, signal } from '@angular/core';
import { GetallService } from '../getall.service';

interface Posts{
  id:number,
  title:string
}
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts = signal<Posts[]>([])
  constructor(private service:GetallService<Posts[]>){
    //this.service.get().subscribe(posts=>this.posts.set(posts))
    this.readData();
  }

  async readData(){
    const posts =  await this.service.get()
    this.posts.set(posts)
  }
}
