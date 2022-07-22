import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-segundario',
  templateUrl: './header-segundario.component.html',
  styleUrls: ['./header-segundario.component.css']
})
export class HeaderSegundarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  inicioVolver(){
    this.router.navigate(['']);
  }
}
