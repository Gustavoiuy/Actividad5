import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiciocrudService {
Api: string='http://localhost/empleados-main/'

  constructor(private clienteHttp:HttpClient) {

  }
  AgregarUsuarios(datosusuario:Usuario):Observable<any>{
    return this.clienteHttp.post(this.Api+"?insertar=1",datosusuario);
  }

  obtenerUsuarios(){
    return this.clienteHttp.get(this.Api);

  }

  borrarUsuarios(id:any):Observable<any>{
    return this.clienteHttp.get(this.Api+"?borrar="+id);
  }
  
  obtenerUsuario(id:any):Observable<any>{
    return this.clienteHttp.get(this.Api+"?consultar="+id);
  }
  EditarUsuarios(id:any,datosusuario:Usuario):Observable<any>{
    return this.clienteHttp.post(this.Api+"?actualizar="+id,datosusuario);
  }
}
