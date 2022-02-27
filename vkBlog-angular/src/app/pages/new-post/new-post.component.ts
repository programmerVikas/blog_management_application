import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CKEditor4 } from 'ckeditor4-angular';
// import { error } from 'console';
import { BlogContentService } from 'src/app/services/blog-content.service';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private http: CategoryService, private http2: BlogContentService, private _snackBar: MatSnackBar, private rt: ActivatedRoute) { }


  categoryData: any = [];

  blogId: any = null;
  categoryserviceId: any = null;
  categoryserviceValue: any = "Select category";

  // -------------------------------

  categoryId: any = ""
  alertBox = true
  alertHead = ""
  alertDesc = ""

  categoryList(data: any) {
    console.log("selected values : " + data)
    this.categoryId = data;
    this.categoryserviceId = null;
  }

  myForm = new FormGroup({
    "id": new FormControl(this.blogId),
    "title": new FormControl('', [Validators.required]),
    "category": new FormControl('', [Validators.required]),
    "content": new FormControl('Here we are...', [Validators.required])
  })

  onSubmitData() {
    console.log(this.myForm.value)
    if(this.categoryserviceId != null){
      this.myForm.value.category = {
        "id": this.categoryserviceId
      }     
    }else{
      this.myForm.value.category = {
        "id": this.categoryId
      }
    }
    this.http2.saveBlog(this.myForm.value).subscribe((user: any) => {
      if (this.blogId == null) {
        this.myForm = new FormGroup({
          "title": new FormControl('',),
          "category": new FormControl(''),
          "content": new FormControl('Here we are...')
        })

      }

      this.alertBox = false
      this.alertHead = "Successfull : "
      this.alertDesc = " Post has saved."

      // snack bar dialog box code------------------------------
      this._snackBar.open('Successfully posted', '😍', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1 * 1000,
      });
    }, (error) => {
      this.alertHead = "Something is wrong!"
      this.alertDesc = " : Please fill every field carefully."
      this.alertBox = false

      // snack bar dialog box code------------------------------
      this._snackBar.open('Something is wrong !!', '🤨', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1 * 1000,
      });

    })
  }

  closeAlert() {

    this.alertBox = true

  }

  // -------------------------------


  ngOnInit(): void {

    this.rt.params.subscribe(params => {
      this.blogId = params['id'];
      this.http2.getBlogById(params['id']).subscribe((user: any) => {
        this.categoryserviceId = user.category.id;
        this.categoryserviceValue = user.category.category;
        this.myForm = new FormGroup({
          "id": new FormControl(user.id),
          "title": new FormControl(user.title, [Validators.required]),
          "category": new FormControl(user.category.id, [Validators.required]),
          "content": new FormControl(user.content, [Validators.required])
        })
      })

    });

    console.log("this is vikas" + this.categoryData)
    this.http.getCategory().subscribe((user: any) => {
      this.categoryData = user
    })


  }

}
