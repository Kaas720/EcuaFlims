import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { cedrenciales } from '../interfaces/credenciales';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Usuario/Login';
  constructor(private http: HttpClient) { }
  login(user: cedrenciales){
    return this.http.post(this.urlhost + this.urlApi, user);
  }
  get getUsername(){
    return localStorage.getItem('userName');
  }
  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }
}
