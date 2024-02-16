import { Component } from '@angular/core';
import { PostModule } from '../models/post/post.module';
import { PostService } from '../service/post.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  post=new PostModule()
  id!:any
  constructor(private Posts:PostService 
    , private router: Router 
    , private route: ActivatedRoute ){
      this.id = this.route.snapshot.paramMap.get("id")
      this.Posts.getPostById(this.id).subscribe(data =>{
        this.post = data
      })
  }
  


  creatData(){
    this.Posts.createPost(this.post).subscribe(data=>{
      this.router.navigate(['/'])
    })
   
  }
}
