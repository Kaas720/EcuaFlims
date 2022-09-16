import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import { CategoriasService } from '../services/categorias.service';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {
  
  constructor(private service : PeliculasService,private router: Router) { }
  opened = false;
  ngOnInit(): void {
    this.cargarCategorias();
  }
  categoria : any;
  cargarCategorias(){
    this.service.getCategorias().subscribe((data : any) =>{
      this.categoria = data;
    },
    (errorData) => {
      alert(errorData);    
    }
    );
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

  AbrirCaterorigias(){
    let divMostrar = <HTMLVideoElement> document.getElementById("divCategoriasAlmacenadas");
    let botonFlecha = <HTMLVideoElement> document.getElementById("botonFlecha");
    if(this.bandera==false){
      divMostrar.classList.replace('d-none','d-block');
      botonFlecha.classList.replace('bi-caret-down-fill','bi-caret-up-fill');
      this.bandera=true;
     }
     else{
      divMostrar.classList.replace('d-block','d-none');
      botonFlecha.classList.replace('bi-caret-up-fill','bi-caret-down-fill');
      this.bandera=false;
     }
  }
  eventoParacambiarTamanoLetrayColor(categoria: string){
    let parrafo = <HTMLVideoElement> document.getElementById(categoria);
    parrafo.style.fontSize = '23px';
    parrafo.style.color = 'white';
  }
  restaurarTamanoLetrayColor(categoria: string){
    let parrafo = <HTMLVideoElement> document.getElementById(categoria);
    parrafo.style.fontSize = '21px';
    parrafo.style.color = 'rgba(255, 255, 255, 0.7)';
  }
}
