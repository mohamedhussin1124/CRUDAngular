import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  posts!:any;
  massage!:string
  constructor(private PostService:PostService){}


  getAllData(){
    this.PostService.getPosts().subscribe(post=>{
      this.posts = post
      this.posts = this.posts['Data']
      console.log(this.posts)
  })
  }
  ngOnInit(): void {
    this.getAllData()
  }
  removeItem(id:string){
    this.PostService.deletePost(id).subscribe(data=>{
      console.log(data)
      this.massage = "Sucsses to Delete Data"
      setTimeout(()=>{this.massage=''},1000)
      this.getAllData()
    })
  }
}
