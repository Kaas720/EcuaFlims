import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private router: Router,private dialogRef: MatDialogRef<EditarPeliculaComponent>,@ Inject(MAT_DIALOG_DATA) public data: Pelicula) { }
  peliculaNueva = new FormGroup({
    nombre: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required),
    productora: new FormControl('', Validators.required),
    anioEstreno: new FormControl('', Validators.required),
  })
  ngOnInit(): void  {

  }
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
