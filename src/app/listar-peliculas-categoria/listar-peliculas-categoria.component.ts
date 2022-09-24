import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PeliculaInterface } from '../interfaces/PeliculaInterface';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-listar-peliculas-categoria',
  templateUrl: './listar-peliculas-categoria.component.html',
  styleUrls: ['./listar-peliculas-categoria.component.css']
})
export class ListarPeliculasCategoriaComponent implements OnInit {
  idCategoriaprueba:number | undefined;
  palabraBuscada:string | undefined;
  idCategoria:string;
  constructor(private router: ActivatedRoute,private service : PeliculasService, private routers: Router,) { 
    this.routers.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
      this.idCategoriaprueba = Number(this.router.snapshot.queryParamMap.get('id'));
      if(this.idCategoriaprueba  > 0) {
        this.idCategoria= this.idCategoriaprueba+""
        this.buscarNombreCategoria(this.idCategoria);
      }else{
        this.idCategoria = String(this.router.snapshot.queryParamMap.get('id'));
        this.palabraBuscada = "Coincidencias para: "+this.idCategoria
      }
    
  }
  ImgPrincipal: PeliculaInterface[] = [];
  ngOnInit(): void {
    this.cargarPeliculas(this.idCategoria);
  }
  buscarNombreCategoria(idCategoria:string){
    this.service.getCategoriasPorID(idCategoria).subscribe((data : any) =>{
      this.palabraBuscada = data.nombreCategoria;
     },
     (errorData) => {
      if(localStorage.getItem('token_value') == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no inicio Sesion 😥',
        })
        this.routers.navigate(['']);
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
  cargarPeliculas(idCategoria:string){
    this.service.getPeliculas(idCategoria).subscribe((data : any) =>{
     this.ImgPrincipal = data;
    },
    (errorData) => {
      if(localStorage.getItem('token_value') == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no inicio Sesion 😥',
        })
        this.routers.navigate(['']);
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
  cambiarColorBotonv2(boton: string,id:string){
    let botonId = <HTMLVideoElement> document.getElementById(boton);
    botonId.classList.replace("invisible", "visible");
    let IMG = <HTMLVideoElement> document.getElementById(id);
    IMG.style.border = '3px solid rgb(115,61,235)';
  }
  restaurarColorBotonV2(boton: string,id:string){
    let botonn = <HTMLVideoElement> document.getElementById(boton);
    botonn.classList.replace("visible", "invisible");
    let IMG = <HTMLVideoElement> document.getElementById(id);
    IMG.style.border = 'none';
  }
  /*Codigo para cambiar de pagians*/ 
  pageSize = 12;
  i:number = 1;
  desde:number =0;
  hasta:number =12;
  cambiarpagina(e:PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }
  enviarNuevaVentana(ides:string){
    this.routers.navigate(['/user/VerPeliculas/'], { queryParams: { id:  ides} });
  }
  
}
