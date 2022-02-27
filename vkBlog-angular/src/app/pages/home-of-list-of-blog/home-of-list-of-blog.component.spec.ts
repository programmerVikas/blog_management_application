import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfListOfBlogComponent } from './home-of-list-of-blog.component';

describe('HomeOfListOfBlogComponent', () => {
  let component: HomeOfListOfBlogComponent;
  let fixture: ComponentFixture<HomeOfListOfBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOfListOfBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOfListOfBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
