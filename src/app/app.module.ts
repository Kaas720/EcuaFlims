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
import { PrivacidadComponent } from './privacidad/privacidad.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CrearCuentaComponent,
    FormaDePagoComponent,
    PaginaInicioComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
