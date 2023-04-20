import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTipoMusicaComponent } from './blog-tipo-musica.component';

describe('BlogTipoMusicaComponent', () => {
  let component: BlogTipoMusicaComponent;
  let fixture: ComponentFixture<BlogTipoMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTipoMusicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTipoMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
