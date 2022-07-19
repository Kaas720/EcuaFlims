import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes-codigo',
  templateUrl: './preguntas-frecuentes-codigo.component.html',
  styleUrls: ['./preguntas-frecuentes-codigo.component.css']
})
export class PreguntasFrecuentesCodigoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  div1=false;
  div2=false;
  div3=false;
  div4=false;
  divConectado="";
  AbrirDiv(id_entradButtonIcono: string, DivOculto: string){
    let id_entradButtonIconoLet = <HTMLVideoElement> document.getElementById(id_entradButtonIcono);
    let DivOcultoLet = <HTMLVideoElement> document.getElementById(DivOculto);
    if(id_entradButtonIconoLet!=null){
      if(this.div1==false && this.div2==false && this.div3==false && this.div4==false){
          DivOcultoLet.classList.replace("d-none", "d-block");
          id_entradButtonIconoLet.classList.replace("bi-plus-circle","bi-x-circle");
          if(id_entradButtonIcono == "Icon1"){
            this.div1=true;
            this.divConectado="div1";
          }
          if(id_entradButtonIcono == "Icon2"){
            this.div2=true;
            this.divConectado="div2";
          }
          if(id_entradButtonIcono == "Icon3"){
            this.div3=true;
            this.divConectado="div3";
          }
          if(id_entradButtonIcono == "Icon4"){
            this.div4=true;
            this.divConectado="div4";
          }        
      }
      else{
        let contador = 0;
        
        DivOcultoLet.classList.replace("d-none", "d-block");
        id_entradButtonIconoLet.classList.replace("bi-plus-circle","bi-x-circle");
        if(id_entradButtonIcono == "Icon1"){
          this.div1=true;
         }
        if(id_entradButtonIcono == "Icon2"){
          this.div2=true;
         }
        if(id_entradButtonIcono == "Icon3"){
          this.div3=true;
         }
        if(id_entradButtonIcono == "Icon4"){
          this.div4=true;
         }
        if(this.div1==true){
         contador++;
        }
       if(this.div2==true){
         contador++;
        }
       if(this.div3==true){
         contador++;
        }
       if(this.div4==true){
         contador++;
        }
       if(contador==1){
        DivOcultoLet.classList.replace("d-block", "d-none");
        id_entradButtonIconoLet.classList.replace("bi-x-circle","bi-plus-circle");
        if(id_entradButtonIcono == "Icon1"){
          this.div1=false;
         }
        if(id_entradButtonIcono == "Icon2"){
          this.div2=false;
         }
        if(id_entradButtonIcono == "Icon3"){
          this.div3=false;
         }
        if(id_entradButtonIcono == "Icon4"){
          this.div4=false;
         }
       }  
       else{
        if(id_entradButtonIcono != "Icon1"){
          if(this.div1 == true){
            let IconoLet = <HTMLVideoElement> document.getElementById("Icon1");
            let Div= <HTMLVideoElement> document.getElementById("1");
            Div.classList.replace("d-block", "d-none");
            IconoLet.classList.replace("bi-x-circle","bi-plus-circle");
            this.div1=false;
          }
        }
        if(id_entradButtonIcono != "Icon2"){
          if(this.div2 == true){
            let IconoLet = <HTMLVideoElement> document.getElementById("Icon2");
            let Div= <HTMLVideoElement> document.getElementById("2");
            Div.classList.replace("d-block", "d-none");
            IconoLet.classList.replace("bi-x-circle","bi-plus-circle");
            this.div2=false;
          }
        }
        if(id_entradButtonIcono != "Icon3"){
          if(this.div3 == true){
            let IconoLet = <HTMLVideoElement> document.getElementById("Icon3");
            let Div= <HTMLVideoElement> document.getElementById("3");
            Div.classList.replace("d-block", "d-none");
            IconoLet.classList.replace("bi-x-circle","bi-plus-circle");
            this.div3=false;
          }
        }
        if(id_entradButtonIcono != "Icon4"){
          if(this.div4 == true){
            let IconoLet = <HTMLVideoElement> document.getElementById("Icon4");
            let Div= <HTMLVideoElement> document.getElementById("4");
            Div.classList.replace("d-block", "d-none");
            IconoLet.classList.replace("bi-x-circle","bi-plus-circle");
            this.div4=false;
          }
        }
       }      
      }  
    }
  }
}
