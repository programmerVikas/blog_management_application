import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http : CategoryService) { }

  categoryDatas:any = []; 

  ngOnInit(): void {
    this.http.getCategory().subscribe((user)=>{
      this.categoryDatas = user;
    })


    // for (let i = 0; i < 1; i++) {
    //   // const element = array[i];
    //   this.categoryLimitDatas = this.categoryDatas[i];            
    // }

  }
}