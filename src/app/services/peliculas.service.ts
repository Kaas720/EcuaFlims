import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Peliculas';
  private urlApiCategoria: string = 'api/Categorias';
  constructor(private http: HttpClient) { }
  getPeliculas(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' +auth_Token
    })
    return this.http.get(this.urlhost + this.urlApi,{headers: header});
  }
  getCategorias(){
    let auth_Token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+auth_Token
    })
    return this.http.get(this.urlhost + this.urlApiCategoria,{headers: header});
  }
}
