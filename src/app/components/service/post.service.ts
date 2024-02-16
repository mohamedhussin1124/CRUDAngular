import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModule } from '../models/post/post.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl:string = "https://webapi.elhossiny.net/api/student"
  constructor(private HttpCline:HttpClient) { }
  getPosts() :Observable<PostModule[]>{
    return this.HttpCline.get<PostModule[]>(this.baseUrl)
  }
  createPost(data:PostModule){
    return this.HttpCline.post(this.baseUrl,data)
  }
  getPostById(id:string):Observable<PostModule>{
    return this.HttpCline.get<PostModule>(`${this.baseUrl}/${id}`)
  }
  updatePost(post:PostModule):Observable<PostModule>{
    return this.HttpCline.put<PostModule>(`${this.baseUrl}/${post.id}`,post)
  }
  deletePost(id:string):Observable<PostModule>{
    return this.HttpCline.delete<PostModule>(`${this.baseUrl}/${id}`)
  }
  
}
