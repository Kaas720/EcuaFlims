import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  SlickCarouselModule  }  from  'ngx-slick-carousel' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormaDePagoComponent } from './forma-de-pago/forma-de-pago.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PruebaVelocidadComponent } from './prueba-velocidad/prueba-velocidad.component';
import { TerminoDeUsoComponent } from './termino-de-uso/termino-de-uso.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { PreguntasFrecuentesCodigoComponent } from './preguntas-frecuentes-codigo/preguntas-frecuentes-codigo.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginEcuaFilmsComponent } from './login-ecua-films/login-ecua-films.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { PeliculasComponent } from './peliculas/peliculas.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderClienteComponent } from './header-cliente/header-cliente.component';
import { HomeComponent } from './home/home.component';
import { HeaderSegundarioComponent } from './header-segundario/header-segundario.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EditarPeliculaComponent } from './editar-pelicula/editar-pelicula.component';
import { AgregarPeliculaComponent } from './agregar-pelicula/agregar-pelicula.component';
import { ReportesPeliculaComponent } from './reportes-pelicula/reportes-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CrearCuentaComponent,
    FormaDePagoComponent,
    PaginaInicioComponent,
    PruebaVelocidadComponent,
    TerminoDeUsoComponent,
    PrivacidadComponent,
    PreguntasFrecuentesCodigoComponent,
    PreguntasFrecuentesComponent,
    ContactosComponent,
    LoginEcuaFilmsComponent,
    PeliculasComponent,
    HeaderClienteComponent,
    HomeComponent,
    HeaderSegundarioComponent,
    AdministradorComponent,
    EditarPeliculaComponent,
    AgregarPeliculaComponent,
    ReportesPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
