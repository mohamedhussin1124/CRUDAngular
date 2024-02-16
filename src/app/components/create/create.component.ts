import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { PostModule } from '../models/post/post.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent{
  post=new PostModule()

  constructor(private Posts:PostService , private router: Router ){}
  creatData(){
    this.Posts.createPost(this.post).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/'])
    })
   
  }
}
