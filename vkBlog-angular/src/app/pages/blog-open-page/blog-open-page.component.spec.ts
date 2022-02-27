import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOpenPageComponent } from './blog-open-page.component';

describe('BlogOpenPageComponent', () => {
  let component: BlogOpenPageComponent;
  let fixture: ComponentFixture<BlogOpenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOpenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOpenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
