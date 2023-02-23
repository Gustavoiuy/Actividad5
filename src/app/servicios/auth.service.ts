import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { authResponse, usuario } from '../interfaces/bordados.interface';
import { Usuario } from './usuario';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private _Usuario!: usuario;


 get Usuario(){
  return {...this._Usuario};
 }

  constructor(private http: HttpClient) { 

  }

  registro( name: string, email: string, password: string ) {

    const url  = `http://localhost:4002/api/auth/new`;
    const body = { email, password, name };

    return this.http.post<authResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          if ( ok ) {
            localStorage.setItem('token', token! );
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg) )
      );

  }

  login(email:string, password: string){
    const url   = 'http://localhost:4002/api/auth';

    const body = {email,password};

     return this.http.post<authResponse>(url, body)
     .pipe( 
      tap(resp => {
        if (resp.ok){
          localStorage.setItem('token', resp.token!); 
          this._Usuario={
            name:resp.name!,
            uid: resp.uid! 
          }
        }
      }),
      map(resp=> resp.ok),
      catchError(err=> of(err.error.msg))
      
     );

  }

  validarToken(): Observable<boolean>{
    const url= 'http://localhost:4002/api/auth/renew';
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') ||'')
    
      return this.http.get<authResponse>( url, { headers } )
      .pipe(
        map( resp => {
          localStorage.setItem('token', resp.token! );
          this._Usuario = {
            name: resp.name!,
            uid: resp.uid!
            
          }

          return resp.ok;
        }),
        catchError( err => of(false) )
      );

    
  }


  listarusuarios(){
    const url='http://localhost:4002/api/auth/listarUsers';
    return this.http.get(url);

  }

  logout() {
    localStorage.clear();
  }
}
