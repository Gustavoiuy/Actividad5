import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFavoritosService {

  @Output() diparadorFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
