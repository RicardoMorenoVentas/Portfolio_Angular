import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTipoCocheComponent } from './blog-tipo-coche.component';

describe('BlogTipoCocheComponent', () => {
  let component: BlogTipoCocheComponent;
  let fixture: ComponentFixture<BlogTipoCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTipoCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTipoCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
