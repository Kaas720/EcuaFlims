import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { bottom } from '@popperjs/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  
  constructor(private router: Router) { }
  usuarioLogin = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('', Validators.required),
    correo: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }
  nombreValidarMensaje: string ="";
  apellidoValidarMensaje: string ="";
  correoValidarMensaje: string ="";
  contrasenaValidarMensaje: string ="";
  nombreValidarMensajeVisibilidad: string ="d-none";
  apellidoValidarMensajeVisibilidad: string ="d-none";
  correValidarMensajeVisibilidad: string ="d-none";
  contrasenaValidarMensajeVisibilidad: string ="d-none";
  onSubmit(){
    const validadorBoleean = true;
    var crearCuenta = true;
    var letra = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/i;
    if(this.usuarioLogin.get('nombre')?.value != null){
      const nombre : any = this.usuarioLogin.get('nombre')?.value;
      let id_entradButtonIconoLet: any = <HTMLVideoElement> document.getElementById("nombreInput");
      if (!letra.test(nombre)) {
        this.nombreValidarMensajeVisibilidad="d-block"
        this.nombreValidarMensaje="Caracteres no compatibles en nombre." 
        if(id_entradButtonIconoLet!==null){
          id_entradButtonIconoLet.style.borderColor ="#ff5b83";
          id_entradButtonIconoLet.classList.replace("is-valid", "is-validRecurso");
        }   
        crearCuenta=false;
      }
      else{
        id_entradButtonIconoLet.classList.replace("is-validRecurso", "is-valid");
        id_entradButtonIconoLet.style.borderColor ="green";
        this.nombreValidarMensajeVisibilidad="d-none"
      }
    }
    if(this.usuarioLogin.get('apellido')?.value != null){
      const apellido : any = this.usuarioLogin.get('apellido')?.value;
      let id_entradButtonIconoLet: any = <HTMLVideoElement> document.getElementById("apellidoInput");
      if (!letra.test(apellido)) {
        this.apellidoValidarMensajeVisibilidad="d-block"
        this.apellidoValidarMensaje="Caracteres no compatibles en apellido." 
        if(id_entradButtonIconoLet!==null){
          id_entradButtonIconoLet.style.borderColor ="#ff5b83";
          id_entradButtonIconoLet.classList.replace("is-valid", "is-validRecurso");
        }
        crearCuenta=false;   
      }
      else{
        id_entradButtonIconoLet.classList.replace("is-validRecurso", "is-valid");
        id_entradButtonIconoLet.style.borderColor ="green";
        this.apellidoValidarMensajeVisibilidad="d-none"
      }
    }
    var ValidarCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(this.usuarioLogin.get('correo')?.value != null){
      const correo : any = this.usuarioLogin.get('correo')?.value;
      let id_entradButtonIconoLet: any = <HTMLVideoElement> document.getElementById("correoInput");
      if (!ValidarCorreo.test(correo)) {
        this.correValidarMensajeVisibilidad="d-block"
        this.correoValidarMensaje="Tu correo electrónico debe ser: name@example.com" 
        if(id_entradButtonIconoLet!==null){
          id_entradButtonIconoLet.style.borderColor ="#ff5b83";
          id_entradButtonIconoLet.classList.replace("is-valid", "is-validRecurso");
        }   
        crearCuenta=false;
      }
      else{
        id_entradButtonIconoLet.classList.replace("is-validRecurso", "is-valid");
        id_entradButtonIconoLet.style.borderColor ="green";
        this.correValidarMensajeVisibilidad="d-none"
      }
    }
    /*Validar*/
    if(this.usuarioLogin.get('password')?.value != null){   
      const password  = this.usuarioLogin.get('password')?.value;
      let id_entradButtonIconoLet: any = <HTMLVideoElement> document.getElementById("Contrasena");
      let parrafoContrasena: any = <HTMLVideoElement> document.getElementById("parrafoContrasena");
      parrafoContrasena.classList.replace("d-block", "d-none");
      if(password!=null){
        const longitud = password.length;
        if (longitud<8) {
          this.contrasenaValidarMensajeVisibilidad="d-block"
          this.contrasenaValidarMensaje="Contraseña debe tener un minimo de 8 caracteres" 
          if(id_entradButtonIconoLet!==null){
            id_entradButtonIconoLet.style.borderColor ="#ff5b83";
            id_entradButtonIconoLet.classList.replace("is-valid", "is-validRecurso");
          } 
          crearCuenta=false;  
        }
        else{
          var i;
          var digitCounter=0;
          var digitCounterChar=0;
          for (  i=0; i < longitud; i++ ) {
            var c = password.charAt(i);
            if(Number.isInteger(Number(c))) {
              digitCounter++;
            }
            else{
              digitCounterChar++;
            }
                     
          }
          if(digitCounter==0){
            this.contrasenaValidarMensajeVisibilidad="d-block"
            this.contrasenaValidarMensaje="Tu contraseña debe tener un número como minimo" 
            if(id_entradButtonIconoLet!==null){
              id_entradButtonIconoLet.style.borderColor ="#ff5b83";
              id_entradButtonIconoLet.classList.replace("is-valid", "is-validRecurso");
            }   
            crearCuenta=false;
          }
          else{
            if(digitCounterChar!=0){
              id_entradButtonIconoLet.classList.replace("is-validRecurso", "is-valid");
              id_entradButtonIconoLet.style.borderColor ="green";
              this.contrasenaValidarMensajeVisibilidad="d-none";
              let iconoFontCambio = <HTMLVideoElement> document.getElementById("IconoBotonContrasena");
              iconoFontCambio.style.color = "green";
            }
            else{
              this.contrasenaValidarMensajeVisibilidad="d-block"
              this.contrasenaValidarMensaje="Tu contraseña debe tener una letra como minimo" 
              if(id_entradButtonIconoLet!==null){
                id_entradButtonIconoLet.style.borderColor ="#ff5b83";
                id_entradButtonIconoLet.classList.replace("is-valid", "is-validRecurso");
              }   
              crearCuenta=false;
            }
            
          }
          
        }
      }
    } 
    if(crearCuenta){
      Swal.fire({
        icon: 'success',
        title: 'Felicitaciones cuenta creada 😉.\n Ahora solo inicia sesión con tus credenciales',
        allowOutsideClick: false,
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['']);
        }
      })
     
    }  
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
