import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../service/post.service';
import { PostModule } from '../models/post/post.module';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [RouterLink,DatePipe],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  id!:any
  
  getData=new PostModule
  currentDate = new Date()
constructor(private http:PostService , private route: ActivatedRoute){
  this.id = this.route.snapshot.paramMap.get("id")
  this.http.getPostById(this.id).subscribe(data =>{
    this.getData = data
  })
}
}
