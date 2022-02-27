import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterAdminService } from 'src/app/services/register/register-admin.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService : RegisterAdminService, private route : Router) { }

  myForm = new FormGroup({
    "name": new FormControl('', [Validators.required, Validators.minLength(3)]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required, Validators.minLength(8)]),

  })


  onSubmitData(){
    // console.log(this.myForm.value);
    this.registerService.saveAdmin(this.myForm.value).subscribe((user)=>{
      console.log("admin has saved...")
      this.route.navigate(['/adminHome'])
    },(error)=>{
      console.log("Some thing is wrong....");
      console.error();
      
    })

  }




  ngOnInit(): void {
  }

}
