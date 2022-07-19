import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  PrivacidadClick(){
    this.router.navigate(['/Privacidad']);
  }
  PreguntasFrecuentes(){
    this.router.navigate(['/PreguntasFrecuentes']);
  }
  PruebaVelocidad(){
    this.router.navigate(['/PruebaVelocidad']);
  }
  TerminoDeUso(){
    this.router.navigate(['/TerminoDeUso']);
  }
}
