import { Coches, Musica, Tecnologias } from "./Enums";

export class Blog{
  public static id_blog_class : number = 0;
  private _id: number;
  private _titulo: string;
  private _contenido: string;
  private _preview: string;
  private _nombre_escritor: string;
  private _fecha: Date;
  private _valoracion: number;
  private _type_blog: string = "";
  private _musica_type?: Musica | undefined;
  private _coche_type?: Coches | undefined;
  private _tech_type?: Tecnologias | undefined;


  constructor(titulo : string, cont : string, author : string, val : number, coche? : Coches, musica? : Musica, techs? : Tecnologias){
    Blog.id_blog_class++;
    this._id = Blog.id_blog_class;
    this._titulo = titulo;
    this._contenido = cont;
    this._nombre_escritor = author;
    this._fecha = new Date();
    if (typeof coche != 'undefined'){
      this._type_blog = "coche";
    }else if (typeof musica != 'undefined'){
      this._type_blog = "musica";
    }else{
      this._type_blog = "tech"
    }
    this._preview = this._contenido.substring(0,20) + '...';
    this._coche_type = coche;
    this._musica_type = musica;
    this._tech_type = techs;
    this._valoracion = val;
  }

  public get fecha(): Date {
    return this._fecha;
  }
  public set fecha(value: Date) {
    this._fecha = value;
  }
  public get nombre_escritor(): string {
    return this._nombre_escritor;
  }
  public set nombre_escritor(value: string) {
    this._nombre_escritor = value;
  }
  public get contenido(): string {
    return this._contenido;
  }
  public set contenido(value: string) {
    this._contenido = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get coche_type(): Coches | undefined {
    return this._coche_type;
  }
  public set coche_type(value: Coches | undefined) {
    this._coche_type = value;
  }
  public get musica_type(): Musica | undefined {
    return this._musica_type;
  }
  public set musica_type(value: Musica | undefined) {
    this._musica_type = value;
  }
  public get tech_type(): Tecnologias | undefined {
    return this._tech_type;
  }
  public set tech_type(value: Tecnologias | undefined) {
    this._tech_type = value;
  }
  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }
  public get type_blog(): string {
    return this._type_blog;
  }
  public set type_blog(value: string) {
    this._type_blog = value;
  }
  public get preview(): string {
    return this._preview;
  }
  public set preview(value: string) {
    this._preview = value;
  }
  public get valoracion(): number {
    return this._valoracion;
  }
  public set valoracion(value: number) {
    this._valoracion = value;
  }


}
