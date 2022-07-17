import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma-de-pago',
  templateUrl: './forma-de-pago.component.html',
  styleUrls: ['./forma-de-pago.component.css']
})
export class FormaDePagoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CambiarColor(){
    let tipoInput :any = document.getElementById("botonPagar");
    tipoInput.style.color="rgba(0, 0, 0,0.4)";
  }
  CambiarColorOriginal(){
    let tipoInput :any = document.getElementById("botonPagar");
    tipoInput.style.color="white";
  }
}
