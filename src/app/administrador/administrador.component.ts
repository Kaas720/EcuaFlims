import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AgregarPeliculaComponent } from '../agregar-pelicula/agregar-pelicula.component';
import { EditarPeliculaComponent } from '../editar-pelicula/editar-pelicula.component';
import { PeliculaInterface } from '../interfaces/PeliculaInterface';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  dataSource: any = [];
  data = [{
    nombre: 'Spiderman no hay home',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 2022
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
    nombre: 'Doctor Strange 2',      
    categoria: 'Ciencia Ficcion',
    productora: 'Marvel',
    anioEstreno: 20022
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
nuevoPelicula:any;
nav: any;
  constructor( private dialog:MatDialog,private router: Router) { 
    this.nav = this.router.getCurrentNavigation();
    this.nuevoPelicula = this.nav.extras.state;
    if (this.nuevoPelicula != null)
    {      
      console.log(this.nuevoPelicula.datosPeliculas.queryParams);
      this.data.push(this.nuevoPelicula.datosPeliculas.queryParams);
    }
  }
  displayedColumns: string[] = ['nombre','categoria', 'productora','anioEstreno','boton']
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeliculaInterface>(this.data as PeliculaInterface[]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deletePelicula(){
    Swal.fire({
      title: 'Desea eliminar permanentemente la pelicula',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: 'Cancelar',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Pelicula eliminada correctamente', '', 'success')
      } 
    })
  }
  openDialogEditar(nombre:string,genero:string,productora:string,anioEstreno:number){ 
    this.dialog.open(EditarPeliculaComponent, {
      data: new Pelicula(nombre, genero, productora,anioEstreno),
      width: '30%'
    });
  }
  openDialogAgregar(){
    this.dialog.open(AgregarPeliculaComponent, {
      width: '30%',
    })
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
  cerrarSesion(){
    this.router.navigate(['']);
  }
  abrirReportes(){
    this.router.navigate(['/Reportes']);
  }
}
