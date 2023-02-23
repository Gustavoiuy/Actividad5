import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/bordados.interface';
import { Publisher } from '../interfaces/bordados.interface';

@Injectable({
  providedIn: 'root'
})
export class BordadosService {

  constructor(private http:HttpClient) {
  
   }

   getBordados(){
      
    return this.http.get<Heroe[]>('http://localhost:3000/heroes')
   }

  getBordadoPorid(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(` http://localhost:3000/heroes/${id}`);

  }

   getSugerenias( Termino:string):Observable<Heroe[]>{
    return this.http.get<Heroe[]>(` http://localhost:3000/heroes?q=${Termino}&_limit=5`)
   }

   getpublisher(categoriaselecionada:string):Observable<Publisher[]>{
    return this.http.get<Publisher[]>(`http://localhost:3000/heroes?q=${categoriaselecionada}`)
   }
   
   }


   