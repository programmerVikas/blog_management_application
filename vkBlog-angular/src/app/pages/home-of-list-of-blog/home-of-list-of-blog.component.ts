import { Component, OnInit } from '@angular/core';
import { BlogContentService } from 'src/app/services/blog-content.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home-of-list-of-blog',
  templateUrl: './home-of-list-of-blog.component.html',
  styleUrls: ['./home-of-list-of-blog.component.css'],
})
export class HomeOfListOfBlogComponent implements OnInit {

  constructor(private bs: BlogContentService, private cs: CategoryService) { }

  item = ["India News", "Techanology", "Today News", "Trending News"]

  IndiaNews: any = [];
  SportsNews: any = [];
  MovieNews: any = [];
  TrendingNews: any = [];

  displayStyle = "none";



  ngOnInit(): void {
    this.displayStyle = "block";

    this.bs.getBlogCategoryByItem("India News").subscribe((user: any) => {
      this.IndiaNews = user;

    })

    this.bs.getBlogCategoryByItem("Sports News").subscribe((user: any) => {
      this.SportsNews = user;
    })

    this.bs.getBlogCategoryByItem("Movie News").subscribe((user: any) => {
      this.MovieNews = user;
    })

    this.bs.getBlogCategoryByItem("Trending News").subscribe((user: any) => {
      this.TrendingNews = user;
      this.displayStyle = "none";
    })



  }

}
