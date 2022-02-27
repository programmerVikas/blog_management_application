import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListOfPostComponent } from './pages/list-of-post/list-of-post.component';
import { BlogOpenPageComponent } from './pages/blog-open-page/blog-open-page.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomeOfListOfBlogComponent } from './pages/home-of-list-of-blog/home-of-list-of-blog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorpagesComponent } from './component/errorpages/errorpages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListOfPostComponent,
    BlogOpenPageComponent,
    FooterComponent,
    AdminHomeComponent,
    NewPostComponent,
    HomeOfListOfBlogComponent,
    ErrorpagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
