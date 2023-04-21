import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/_modelos/Blog';
import { BlogService } from '../blogServices/blog.service';

@Component({
  selector: 'app-blog-tipo-musica',
  templateUrl: './blog-tipo-musica.component.html',
  styleUrls: ['./blog-tipo-musica.component.css']
})
export class BlogTipoMusicaComponent implements OnInit {

  private _blog_select: Blog | undefined;

  constructor(private act_router : ActivatedRoute, private service : BlogService){}

  ngOnInit(): void {
      const routeParams = this.act_router.snapshot.paramMap;
      let act_id = Number.parseInt(routeParams.get('idBlog')!);
      this._blog_select = this.service.blog_arr.find(elemento => elemento.id == act_id);
  }

  public get blog_select(): Blog | undefined {
    return this._blog_select;
  }
  public set blog_select(value: Blog | undefined) {
    this._blog_select = value;
  }
}
