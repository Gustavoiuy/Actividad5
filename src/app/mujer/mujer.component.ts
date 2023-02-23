import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../interfaces/bordados.interface';
import { BordadosService } from '../servicios/bordados.service';
 interface opciones {
    
    Editorial: string;
  }
@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<Heroe>();
 
  categoriaselecionada:string="";
  selectedValue:string=""
  categorias: any []=[
    { value: 'DC Comics',nombre: 'DC Comics'},
    {value: 'Marvel Comics',nombre: 'Marvel Comics'},

  ]

  heroe :Heroe[]=[]
  filtro:Heroe[]=[]



  

 
  Termino:string ="";
  

  constructor(private bordadosService: BordadosService) { }

  heroeSeleccionado: Heroe | undefined;
  

  buscando(){
    this.bordadosService.getSugerenias(this.Termino.trim() )
    .subscribe(heroes => this.heroe= heroes);

  }
  // filtro(){
  //   this.bordadosService.getpublisher(this.selectedValue)
  //   .subscribe(heroes => this.heroe= heroes);
  //   console.log(this.heroe)
    
   
  // }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      console.log("no hay nada")
      return;
    }
    const heroe:Heroe = event.option.value;
    this.Termino=heroe.superhero;

    this.bordadosService.getBordadoPorid(heroe.id!)
    .subscribe(heroe=> this.heroeSeleccionado=heroe);

  }
 
  ngOnInit(): void {
   
  }

 
  buscarnoticia(){
   
    //console.log(this.paisseleccionado);

  //   this.bordadosService.getpublisher(this.categoriaselecionada.trim())
  //   .subscribe(heroes => this.filtro= heroes);
  //   console.log(this.filtro)
  // }
}
}
