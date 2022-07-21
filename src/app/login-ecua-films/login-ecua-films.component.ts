import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-ecua-films',
  templateUrl: './login-ecua-films.component.html',
  styleUrls: ['./login-ecua-films.component.css']
})
export class LoginEcuaFilmsComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginEcuaFilmsComponent>) { }
  usuarioLogin = new FormGroup({
    correo: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }
  CuentaValidarMensajeVisibilidad="d-none";
  correValidarMensajeVisibilidadLogin: string ="d-none";
  correoValidarMensajeLogin: string ="HOLAA";
  onSubmit(){
    this.CuentaValidarMensajeVisibilidad="d-none";
    this.correValidarMensajeVisibilidadLogin="d-none";
    var ValidarCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(this.usuarioLogin.get('correo')?.value != null){
      const correo : any = this.usuarioLogin.get('correo')?.value;
      let id_entradButtonIconoLet: any = <HTMLVideoElement> document.getElementById("correoInputLogin");
      if (!ValidarCorreo.test(correo)) {
        this.correValidarMensajeVisibilidadLogin="d-block"
        this.correoValidarMensajeLogin="Tu correo electrónico debe ser: name@example.com" 
      }
      else{
        this.correValidarMensajeVisibilidadLogin="d-none";
        if(this.usuarioLogin.get('correo')?.value === 'kevin@hotmail.com' &&  this.usuarioLogin.get('password')?.value == '1234emelec') {
          alert("Inicio De seccion Exitoso");
          this.closeDialog();
        }
        else{
          this.CuentaValidarMensajeVisibilidad="d-block";
        }  
      }
    }   
  }
  closeDialog(){
    this.dialogRef.close();
  }
  contrasenaMostrar(iconoFont: string, idInputContrasena: string){
    let tipoInput :any = document.getElementById(idInputContrasena);
    let iconoFontCambio = <HTMLVideoElement> document.getElementById(iconoFont);
    if(tipoInput != null){
      if(tipoInput.type == "password"){
        tipoInput.type = "text";
        iconoFontCambio.classList.replace("bi-eye", "bi-eye-slash");
      }
      else{
        tipoInput.type = "password";
        iconoFontCambio.classList.replace("bi-eye-slash", "bi-eye");
      }
    }  
  }
}
