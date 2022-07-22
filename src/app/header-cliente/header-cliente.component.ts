import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {

  constructor(private router: Router) { }
  opened = false;
  ngOnInit(): void {
  }
  bandera = false;
  mostrarDiv(){
    let divMostrar = <HTMLVideoElement> document.getElementById("navbarToggleExternalContent");
     if(this.bandera==false){
      divMostrar.classList.replace('d-none','d-block');
      this.bandera=true;
     }
     else{
      divMostrar.classList.replace('d-block','d-none');
      this.bandera=false;
     }
  }
  dirigirseHome(){
    this.router.navigate(['/Home']);
  }
  dirigirsePelicula(){
    this.router.navigate(['/Peliculas']);
  }
  dirigirseFormadePago(){
    this.router.navigate(['/FormaPago']);
  }
  CerrarSeccion(){
    this.router.navigate(['']);
  }
}
