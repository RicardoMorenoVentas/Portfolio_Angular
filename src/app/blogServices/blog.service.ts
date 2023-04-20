import { Injectable } from '@angular/core';
import { Blog } from 'src/_modelos/Blog';
import { Coches, Musica, Tecnologias } from 'src/_modelos/Enums';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _blog_arr: Array<Blog> = [new Blog("Angular","Angular es un Framework basado en Typescript","Pepito",undefined, undefined, Tecnologias.Angular), new Blog("Git","Git nos ofrece un control de versiones sobre el código, centralización del mismo y compartir este","Fulanito",undefined, undefined,Tecnologias.Git)];
  constructor() { }
  public get blog_arr(): Array<Blog> {
    return this._blog_arr;
  }
  public set blog_arr(value: Array<Blog>) {
    this._blog_arr = value;
  }
}
