import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { HeaderClienteComponent } from './header-cliente/header-cliente.component';
import { HomeComponent } from './home/home.component';
import { ListarPeliculasCategoriaComponent } from './listar-peliculas-categoria/listar-peliculas-categoria.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { PruebaVelocidadComponent } from './prueba-velocidad/prueba-velocidad.component';
import { ReportesPeliculaComponent } from './reportes-pelicula/reportes-pelicula.component';
import { TerminoDeUsoComponent } from './termino-de-uso/termino-de-uso.component';
import { VerPeliculaComponent } from './ver-pelicula/ver-pelicula.component';


const routes: Routes = [
  {path:'',component:PaginaInicioComponent},
  {path:'CrearCuenta',component:CrearCuentaComponent},
  {path:'Privacidad',component:PrivacidadComponent},
  {path:'TerminoDeUso',component:TerminoDeUsoComponent},
  {path:'PruebaVelocidad',component:PruebaVelocidadComponent},
  {path:'PreguntasFrecuentes',component:PreguntasFrecuentesComponent},
  {path:'Contactanos',component:ContactosComponent},
  {path:'Peliculas',component:PeliculasComponent},
  {path:'Administrador',component:AdministradorComponent},
  {path:'Reportes',component:ReportesPeliculaComponent},
  {path:'user',component:HeaderClienteComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'VerPeliculas',component:VerPeliculaComponent},
    {path:'FormaPago',component:FormaDePagoComponent},
    {path:'ListarPeliculasCataegoria',component:ListarPeliculasCategoriaComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
