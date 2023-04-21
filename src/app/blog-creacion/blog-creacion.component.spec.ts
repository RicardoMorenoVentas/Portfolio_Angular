import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreacionComponent } from './blog-creacion.component';

describe('BlogCreacionComponent', () => {
  let component: BlogCreacionComponent;
  let fixture: ComponentFixture<BlogCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCreacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
