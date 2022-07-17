import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {path:'',component:PaginaInicioComponent},
  {path:'CrearCuenta',component:CrearCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
