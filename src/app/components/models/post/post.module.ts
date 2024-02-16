import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostModule { 
  name!:string
  level!:string
  gander!:string
  created_at!:string 
  updated_at!:string
  id!:string
  message!:string
}
