import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { BlogTipoTechComponent } from './blog-tipo-tech/blog-tipo-tech.component';
import { BlogTipoMusicaComponent } from './blog-tipo-musica/blog-tipo-musica.component';
import { BlogTipoCocheComponent } from './blog-tipo-coche/blog-tipo-coche.component';
import { BlogCreacionComponent } from './blog-creacion/blog-creacion.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'blog', title:"Blog de Ricardo Moreno-Ventas" ,component: BlogComponent },
  { path: 'form', title:"Formulario de contacto" ,component: FormularioContactoComponent },
  { path: 'tech-blog/:idBlog', title:"Blog de tecnología" , component: BlogTipoTechComponent },
  { path: 'music-blog/:idBlog', title:"Blog de música" , component: BlogTipoMusicaComponent },
  { path: 'auto-blog/:idBlog', title:"Blog de coches" , component: BlogTipoCocheComponent },
  { path: 'new-blog', title:"Nuevo artículo del blog" , component: BlogCreacionComponent },
  { path: 'inicio', title:"Ricardo Moreno-Ventas" ,component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
