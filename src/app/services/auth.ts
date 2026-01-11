import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // private api='http://localhost:3000/api/auth';
  private api= environment.apiUrl+'api/auth';
  constructor(private http:HttpClient){

  }

  login(data:{email:string,password:string}){
    return this.http.post<{token:string}>(
      `${this.api}/login`,
      data
    )
  }
  saveToken(token:string){
    localStorage.setItem('token',token);

  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn():boolean{
    return !! this.getToken();
  }

}
