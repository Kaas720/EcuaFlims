import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { HomeComponent } from './home/home.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
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
  {path:'PreguntasFrecuentes',component:PreguntasFrecuentesComponent},
  {path:'Contactanos',component:ContactosComponent},
  {path:'Peliculas',component:PeliculasComponent},
  {path:'Home',component:HomeComponent},
  {path:'FormaPago',component:FormaDePagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
