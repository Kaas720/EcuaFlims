import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import Swal from 'sweetalert2';
import { CategoriasService } from '../services/categorias.service';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent implements OnInit {
  
  constructor(private service : PeliculasService,private router: Router) {

   }
  opened = false;
  ngOnInit(): void {
    this.cargarCategorias();
  }
  PeliculasBuscar = new FormGroup({
    pelicula: new FormControl('',Validators.required),
  })
  onSubmit(){
    this.router.navigate(['/user/ListarPeliculasCataegoria/'], { queryParams: { id:  this.PeliculasBuscar.value.pelicula} });
  }
  dirigirseaHome(){
    this.router.navigate(['/user/']);
  }
  dirigirseAPeliculas(idPeliculacat:string){
    this.router.navigate(['/user/ListarPeliculasCataegoria/'], { queryParams: { id:  idPeliculacat} });   
  }


  categoria : any;
  cargarCategorias(){
    this.service.getCategorias().subscribe((data : any) =>{
      this.categoria = data;
    },
    (errorData) => {
      if(localStorage.getItem('token_value') == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no inicio Sesion 😥',
        })
        this.router.navigate(['']);
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Existio un error al ejecutar la aplicación 😥',
        })
      }
    }
    );
  }
  correoUsuario =  localStorage.getItem('userName');
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
    this.router.navigate(['/user/']);
  }
  dirigirsePelicula(ides:string){
    this.router.navigate(['/ListarPeliculasCataegoria/'], { queryParams: { id:  ides} });
  }
  dirigirseFormadePago(){
    this.router.navigate(['/user/FormaPago']);
  }
  CerrarSeccion(){
    localStorage.removeItem('token_value');
    localStorage.removeItem('userName');
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
  validationVentana = false;
  abrirDivOculto(){
    let parrafo = <HTMLVideoElement> document.getElementById("DivOculto");
    if(!this.validationVentana){ 
      parrafo.classList.replace('d-none','d-block');
      this.validationVentana = true;
    }
    else{
      parrafo.classList.replace('d-block','d-none');
      this.validationVentana = false;
    }
    
  }
}
