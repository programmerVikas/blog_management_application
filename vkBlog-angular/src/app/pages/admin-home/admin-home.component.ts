import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BlogContentService } from 'src/app/services/blog-content.service';
// import { error } from 'console';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http: CategoryService, private _snackBar: MatSnackBar, private blogService: BlogContentService, private router: Router) { }

  cEditId: any = null;
  cEditCategory = ""
  cEditDescription = ""


  // pagination *************************************
  p: number = 1;
  q: number = 1;

  blogData: any = [];
  categoryData: any = [];


  // data is coming from page for editing category****************************************************
  submiteditData(id: any, category: any, description: any) {
    this.cEditId = id;
    this.cEditCategory = category;
    this.cEditDescription = description;
  }

  // category data is saving******************************************************************* 
  submitData(data: any) {
    this.http.saveCategory(data.value).subscribe((user) => {
      // snack bar dialog box code------------------------------
      this._snackBar.open('Successfully posted', '😍', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1 * 1000,
      });
    }, (error) => {
      // snack bar dialog box code------------------------------
      this._snackBar.open('Something is wrong !!', '🤨', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1 * 1000,
      });
    })

  }


  // deleting blog data**********************************************
  deleteById(id: number) {
    this.blogService.deleteContentById(id).subscribe(() => {
      this._snackBar.open('One item deleted', '😍', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1 * 1000,
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['adminHome']));
    })
  }

  // deleting category data**************************************************************
  deleteCategoryById(id: number) {
    this.http.deleteCategory(id).subscribe(() => {
      this._snackBar.open('One item deleted', '😍', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1 * 1000,
      });
      // after deleting data this is again redirecting at admin home page
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['adminHome']));
    })
  }


  // ------------------------------------***----------------------------***---------------------



  ngOnInit(): void {

    // getting blog data from server**************************************************
    this.blogService.getAllBlogData().subscribe((user: any) => {
      this.blogData = user;
    })


    // getting category(data) from server ************************************************
    this.http.getCategory().subscribe((user: any) => {
      this.categoryData = user;
      console.log(user)
    })

  }



}
