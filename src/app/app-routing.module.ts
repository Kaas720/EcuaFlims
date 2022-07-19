import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { PruebaVelocidadComponent } from './prueba-velocidad/prueba-velocidad.component';
import { TerminoDeUsoComponent } from './termino-de-uso/termino-de-uso.component';

const routes: Routes = [
  {path:'',component:PaginaInicioComponent},
  {path:'CrearCuenta',component:CrearCuentaComponent},
  {path:'Privacidad',component:PrivacidadComponent},
  {path:'TerminoDeUso',component:TerminoDeUsoComponent},
  {path:'PruebaVelocidad',component:PruebaVelocidadComponent},
  {path:'PreguntasFrecuentes',component:PreguntasFrecuentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
