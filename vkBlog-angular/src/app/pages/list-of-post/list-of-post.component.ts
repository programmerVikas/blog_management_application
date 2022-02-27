import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogContentService } from 'src/app/services/blog-content.service';

@Component({
  selector: 'app-list-of-post',
  templateUrl: './list-of-post.component.html',
  styleUrls: ['./list-of-post.component.css']
})
export class ListOfPostComponent implements OnInit {

  constructor(private http: BlogContentService, private rt: ActivatedRoute) { }

  p: number = 1;
  // count = 0;

  id: any;
  title: any;
  public listOfBlog: any = [];
  // pageOfItems: Array<any> | undefined;
  spinner = true;

  ngOnInit(): void {
    console.log("inside ts file vikas")
    this.spinner = false;

    this.rt.params.subscribe(params => {
      this.id = params['id'];
      this.title = params['category'];

      this.http.getBlogByCategory(params['id']).subscribe((user: any) => {
        this.p = 1;
        this.listOfBlog = user;
        this.spinner = true;
      })
    });




    // this.http.getAllBlogData().subscribe((user) => {
    //   this.listOfBlog = user;
    //   this.spinner = true;
    // })

  }

  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }

}
