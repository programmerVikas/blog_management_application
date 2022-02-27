import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { BlogOpenPageComponent } from './pages/blog-open-page/blog-open-page.component';
import { HomeOfListOfBlogComponent } from './pages/home-of-list-of-blog/home-of-list-of-blog.component';
import { ListOfPostComponent } from './pages/list-of-post/list-of-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ErrorpagesComponent } from "./component/errorpages/errorpages.component";

const routes: Routes = [

{
  path:"",
  component : HomeOfListOfBlogComponent
},
{
  path:"openBlogPage/:id",
  component : BlogOpenPageComponent
},
{
  path:"listOfPost/:id/:category",
  component : ListOfPostComponent
},
{
  path: "adminHome",
  component : AdminHomeComponent
},
{
  path: "newPost",
  component : NewPostComponent
},
{
  path: "updatePost/:id",
  component : NewPostComponent
},
{
  path: "**",
  component : ErrorpagesComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
