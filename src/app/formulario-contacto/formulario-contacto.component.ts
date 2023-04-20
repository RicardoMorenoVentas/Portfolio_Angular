import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import { Formulario } from 'src/_modelos/Formulario';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {
  private _formulario: Formulario | undefined;
  private _staticAlertClosed: boolean = false;

  @ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert | undefined;

  constructor(){}

  ngOnInit(): void {
    this._formulario = new Formulario("","","");
  }

  public get formulario(): Formulario | undefined {
    return this._formulario;
  }
  public set formulario(value: Formulario | undefined) {
    this._formulario = value;
  }
  public get staticAlertClosed(): boolean {
    return this._staticAlertClosed;
  }
  public set staticAlertClosed(value: boolean) {
    this._staticAlertClosed = value;
  }

  // No hace nada actualmente, solo instancia uno nuevo
  mandarFormulario() : void {
    this._staticAlertClosed = true;
    this._formulario = new Formulario("","","");
    setTimeout(() => this.staticAlert!.close(),2000);
  }
}
