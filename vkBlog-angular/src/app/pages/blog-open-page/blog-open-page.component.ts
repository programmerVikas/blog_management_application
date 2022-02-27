import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BlogContentService } from 'src/app/services/blog-content.service';

@Component({
  selector: 'app-blog-open-page',
  templateUrl: './blog-open-page.component.html',
  styleUrls: ['./blog-open-page.component.css']
})
export class BlogOpenPageComponent implements OnInit {
  

  constructor(private blogService : BlogContentService ,private rt : ActivatedRoute, public router : Router) { }

  p: number = 1;

  id:any;

  blogData:any={};
  listOfBlog: any=[];


  redirectTo(uri:any){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/openBlogPage/'+uri]));
 }

  ngOnInit(): void {

    this.rt.params.subscribe(params=>{
      this.id = params['id'];
    });

    this.blogService.getBlogById(this.id).subscribe(user=>{
      this.blogData = user;
      console.log("-----------------------");
      
      this.blogService.getBlogByCategory(this.blogData.category.id).subscribe((user: any) => {
        this.p = 1;
        this.listOfBlog = user;

        // console.log(user.category.id)

        // this.spinner = true;
      })

      // console.log(this.blogData.category);
      
    })
 
  }

}
