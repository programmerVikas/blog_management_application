import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BlogContentService } from 'src/app/services/blog-content.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

 
  constructor(private http: CategoryService, private http2: BlogContentService, private _snackBar: MatSnackBar, private rt : ActivatedRoute) { }


  categoryData: any = [];

  blogId:any=null;

  // -------------------------------

  categoryId: any = ""
  alertBox = true
  alertHead = ""
  alertDesc = ""

  categoryList(data: any) {
    this.categoryId = data;
  }

  myForm = new FormGroup({
    "id" : new FormControl(this.blogId),
    "title": new FormControl('', [Validators.required]),
    "category": new FormControl('', [Validators.required]),
    "content": new FormControl('Here we are...', [Validators.required])
  })

  onSubmitData() {
    this.myForm.value.category = {
      "id": this.categoryId     
    }
    this.http2.saveBlog(this.myForm.value).subscribe((user: any) => {

      this.alertBox = false
      this.alertHead = "Successfull : "
      this.alertDesc = " Post has created."

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
      this.http2.getBlogById(params['id']).subscribe((user:any)=>{
        this.myForm = new FormGroup({
          "id" : new FormControl(user.id),
          "title": new FormControl(user.title, [Validators.required]),
          "category": new FormControl(user.category.id, [Validators.required]),
          "content": new FormControl(user.content, [Validators.required])
        })
      })

    });


    // this.http2.getBlogById()



    console.log("this is vikas" + this.categoryData)
    this.http.getCategory().subscribe((user: any) => {
      this.categoryData = user
    })


  }


}
