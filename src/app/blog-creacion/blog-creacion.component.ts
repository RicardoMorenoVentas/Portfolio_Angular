import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/_modelos/Blog';
import { Tecnologias } from 'src/_modelos/Enums';
import { Musica } from 'src/_modelos/Enums';
import { Coches } from 'src/_modelos/Enums';
import { Tipo_Blog } from 'src/_modelos/Enums';
import { BlogService } from '../blogServices/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-creacion',
  templateUrl: './blog-creacion.component.html',
  styleUrls: ['./blog-creacion.component.css']
})
export class BlogCreacionComponent implements OnInit{
  private _act_blogs = Tipo_Blog;
  private _new_blog: Blog | undefined;
  private _tipoBlog : Tipo_Blog = Tipo_Blog.Coches;
  private _escritoPor: string = "";
  private _contenido: string = "";
  private _tituloBlog: string = "";
  private _subTipoCoche: Coches = Coches.Deportivo;
  private _subTipoTech: Tecnologias = Tecnologias.Angular;
  private _subTipoMusica: Musica = Musica.Clasica;

  private _opcionesBlog: string[] = Object.values(Tipo_Blog).map((r, ind, arr) => r as string);
  private _opcionesTech: string[] = Object.values(Tecnologias).map((r, ind, arr) => r as string);
  private _opcionesMusica: string[] = Object.values(Musica).map((r, ind, arr) => r as string);
  private _opcionesCoche: string[] = Object.values(Coches).map((r, ind, arr) => r as string);

  constructor(private servicio : BlogService, private route : Router){}

  ngOnInit(): void {
  }

  subirBlog(){
    switch (this._tipoBlog) {
      case Tipo_Blog.Coches:
        this.servicio.blog_arr.push(new Blog(this._tituloBlog,this._contenido,this._escritoPor,5,this._subTipoCoche))
        break;

      case Tipo_Blog.Musica:
        this.servicio.blog_arr.push(new Blog(this._tituloBlog,this._contenido,this._escritoPor,5,undefined,this._subTipoMusica))
        break;

      case Tipo_Blog.Tech:
        this.servicio.blog_arr.push(new Blog(this._tituloBlog,this._contenido,this._escritoPor,5,undefined,undefined,this._subTipoTech))
        break;
    }
    this.route.navigate(['/blog']);
  }

  public get new_blog(): Blog | undefined {
    return this._new_blog;
  }
  public set new_blog(value: Blog | undefined) {
    this._new_blog = value;
  }
  public get tituloBlog(): string {
    return this._tituloBlog;
  }
  public set tituloBlog(value: string) {
    this._tituloBlog = value;
  }
  public get contenido(): string {
    return this._contenido;
  }
  public set contenido(value: string) {
    this._contenido = value;
  }
  public get escritoPor(): string {
    return this._escritoPor;
  }
  public set escritoPor(value: string) {
    this._escritoPor = value;
  }
  public get tipoBlog() {
    return this._tipoBlog;
  }
  public set tipoBlog(value) {
    this._tipoBlog = value;
  }
  public get subTipoMusica(): Musica {
    return this._subTipoMusica;
  }
  public set subTipoMusica(value: Musica) {
    this._subTipoMusica = value;
  }
  public get subTipoTech(): Tecnologias {
    return this._subTipoTech;
  }
  public set subTipoTech(value: Tecnologias) {
    this._subTipoTech = value;
  }
  public get subTipoCoche(): Coches {
    return this._subTipoCoche;
  }
  public set subTipoCoche(value: Coches) {
    this._subTipoCoche = value;
  }
  public get opcionesCoche(): string[] {
    return this._opcionesCoche;
  }
  public set opcionesCoche(value: string[]) {
    this._opcionesCoche = value;
  }
  public get opcionesMusica(): string[] {
    return this._opcionesMusica;
  }
  public set opcionesMusica(value: string[]) {
    this._opcionesMusica = value;
  }
  public get opcionesTech(): string[] {
    return this._opcionesTech;
  }
  public set opcionesTech(value: string[]) {
    this._opcionesTech = value;
  }
  public get opcionesBlog(): string[] {
    return this._opcionesBlog;
  }
  public set opcionesBlog(value: string[]) {
    this._opcionesBlog = value;
  }
  public get act_blogs() {
    return this._act_blogs;
  }
  public set act_blogs(value) {
    this._act_blogs = value;
  }

}
