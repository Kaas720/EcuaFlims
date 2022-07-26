import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgregarPeliculaComponent>) { }

  ngOnInit(): void {
  }
  peliculaNueva = new FormGroup({
    nombre: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required),
    productora: new FormControl('', Validators.required),
    anioEstreno: new FormControl('', Validators.required),
  })
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        nombre: this.peliculaNueva.value.nombre,
        categoria: this.peliculaNueva.value.categoria,
        productora: this.peliculaNueva.value.productora,
        anioEstreno: this.peliculaNueva.value.anioEstreno,
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/Administrador', objToSend);

  }
  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosPeliculas: objToSend}}));
  }
  cancelar()
  {
    this.dialogRef.close(); 
  }

}
