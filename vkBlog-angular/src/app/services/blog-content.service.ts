import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogContentService {

  constructor(private http : HttpClient) { }


  
  port = "http://localhost:8080/blogContent/";

  public saveBlog(data:any){
    return this.http.post(this.port+"save", data)
  }


  public getBlogByCategory(id:any){
    return this.http.get(this.port+"dataByCategoryId/"+id);
  }

  public getBlogById(id:any){
    return this.http.get(this.port+"getDataById/"+id);
  }

  public getBlogCategoryByItem(item:any){
    return this.http.get(this.port+"dataByCategoryItem/"+item);
  }

  public getAllBlogData(){
    return this.http.get(this.port+"getAllBlog");
  }

  public deleteContentById(id:number){
    return this.http.delete(this.port+"delete/"+id);
  }


}