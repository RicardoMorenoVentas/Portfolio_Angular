import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTipoTechComponent } from './blog-tipo-tech.component';

describe('BlogTipoTechComponent', () => {
  let component: BlogTipoTechComponent;
  let fixture: ComponentFixture<BlogTipoTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTipoTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTipoTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
