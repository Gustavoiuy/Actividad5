import { Component, OnInit } from '@angular/core';
import { ServicioFavoritosService } from '../servicio-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public listaVideos:Array<any>=[];
  constructor(private servicioFavoritos: ServicioFavoritosService) { }

  ngOnInit(): void {
    this.servicioFavoritos.diparadorFavoritos.subscribe(
      data=>{this.listaVideos.push(data)}
    )
  }


}
