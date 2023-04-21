import { Injectable } from '@angular/core';
import { Blog } from 'src/_modelos/Blog';
import { Coches, Musica, Tecnologias } from 'src/_modelos/Enums';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _blog_arr: Array<Blog> = [new Blog("Angular","Angular es un Framework basado en Typescript","Pepito",5,undefined, undefined, Tecnologias.Angular), new Blog("Introduction to Git - Beginners Guide With Fun Activities","At first, Git comes across as an easy tool that can be learned later when there is a real need. And that day comes when the git command shoots an error, after which Git becomes too complicated to understand. Often developers resort to copy-pasting which doesn’t help in the long run. Unless you are hands-on with Git , you are not an independent developer. You are here because you want to understand and learn Git right from the basics . And that’s what this blog is all about. ","Fulanito",5,undefined, undefined,Tecnologias.Git)];
  constructor() { }
  public get blog_arr(): Array<Blog> {
    return this._blog_arr;
  }
  public set blog_arr(value: Array<Blog>) {
    this._blog_arr = value;
  }
}
