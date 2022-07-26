import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportes-pelicula',
  templateUrl: './reportes-pelicula.component.html',
  styleUrls: ['./reportes-pelicula.component.css']
})
export class ReportesPeliculaComponent implements OnInit {

  constructor(private router: Router) { }
  data = [{
    nombre: 'Spiderman no hay home',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 2022
  },
  {
    nombre: 'DeadPool 2',      
    categoria: 'Ciencia Ficcion',
    productora: 'Fox',
    anioEstreno: 2015
  },
  {
    nombre: 'Bob Esponja',      
    categoria: 'Aventura',
    productora: 'Nickelodeon',
    anioEstreno: 2021
  },
  {
    nombre: 'Doctor Strange 2',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 20022
  },
  {
    nombre: 'Batman',      
    categoria: 'Ciencia Ficcion',
    productora: 'DC COMIC',
    anioEstreno: 2019
  },
  {
    nombre: 'HulK',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 2002
  },
  {
    nombre: 'Escuadron Suicida',      
    categoria: 'Ciencia Ficcion',
    productora: 'DC COMIC',
    anioEstreno: 2015
  },
  {
    nombre: 'Ant-Man',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 2013
  },
  {
    nombre: 'Pinocho',      
    categoria: 'Ciencia Ficcion',
    productora: 'Disney',
    anioEstreno: 20022
  }
  ,
  {
    nombre: 'Avengers End-Game',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 20020
  }
];
  ngOnInit(): void {
  }
  cerrarSesion(){
    this.router.navigate(['']);
  }
  validar = true;
  abrirDiv(){
    let divOculto = <HTMLVideoElement> document.getElementById("SalirCuenta");
    if(this.validar){   
      divOculto.classList.replace("d-none", "d-block");
      this.validar = false;
    }
    else{
      divOculto.classList.replace("d-block", "d-none");
      this.validar = true;
    }
  }
  abrirReportes(){
    this.router.navigate(['/Reportes']);
  }
  generarReporte(){
    Swal.fire({
      icon: 'success',
      title: 'Reporte generado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
