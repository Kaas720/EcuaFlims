import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginEcuaFilmsComponent } from '../login-ecua-films/login-ecua-films.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  inicioVolver(){
    this.router.navigate(['']);
  }
  openDialogLogin(){
    this.dialog.open(LoginEcuaFilmsComponent,  {disableClose: true, width: '600px'});
  }
}
