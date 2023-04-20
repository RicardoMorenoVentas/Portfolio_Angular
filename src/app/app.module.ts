import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { BlogTipoCocheComponent } from './blog-tipo-coche/blog-tipo-coche.component';
import { BlogTipoMusicaComponent } from './blog-tipo-musica/blog-tipo-musica.component';
import { BlogService } from './blogServices/blog.service';
import { BlogTipoTechComponent } from './blog-tipo-tech/blog-tipo-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HabilidadesComponent,
    BlogComponent,
    FormularioContactoComponent,
    BlogTipoCocheComponent,
    BlogTipoMusicaComponent,
    BlogTipoTechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
