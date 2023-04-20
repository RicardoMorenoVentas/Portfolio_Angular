export class Formulario{
  public static id_formulario : number = 0;
  private _id: number;
  private _nombreSend: string;
  private _emailSend: string;
  private _mensaje?: string | undefined;

  constructor(nombre_e : string, email_e : string, mensaje_e? : string){
    Formulario.id_formulario++;
    this._id = Formulario.id_formulario;
    this._nombreSend = nombre_e;
    this._emailSend = email_e;
    this._mensaje = mensaje_e;
  }

  public get mensaje(): string | undefined {
    return this._mensaje;
  }
  public set mensaje(value: string | undefined) {
    this._mensaje = value;
  }
  public get emailSend(): string {
    return this._emailSend;
  }
  public set emailSend(value: string) {
    this._emailSend = value;
  }
  public get nombreSend(): string {
    return this._nombreSend;
  }
  public set nombreSend(value: string) {
    this._nombreSend = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
