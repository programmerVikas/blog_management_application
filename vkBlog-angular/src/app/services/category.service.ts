import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

   port = "http://localhost:8080/category/";

  public saveCategory(data:any){
    return this.http.post(this.port+"save", data);
  }


  public getCategory(){
    return this.http.get(this.port+"getData");
  }
  
  public deleteCategory(data:any){
    return this.http.delete(this.port+"delete/"+data);
  }





}
