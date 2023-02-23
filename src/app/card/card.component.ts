import { Component, OnInit , Input} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../interfaces/bordados.interface';
import { BordadosService } from '../servicios/bordados.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

heroes:Heroe[]=[];
Termino:string ="";
heroeSeleccionado!: Heroe | undefined;

  
  constructor(private bordadosservice: BordadosService) { }

  ngOnInit(): void {

   this.bordadosservice.getBordados()
   .subscribe(heroes=> this.heroes=heroes);
   
  }
  buscando(){
    this.bordadosservice.getSugerenias(this.Termino.trim() )
    .subscribe(heroes => this.heroes= heroes);
  }


  opcionSeleccionada(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      console.log("no hay nada")
      return;
    }
    const heroe:Heroe = event.option.value;
    this.Termino=heroe.superhero;

    this.bordadosservice.getBordadoPorid(heroe.id!)
    .subscribe(heroe=> this.heroeSeleccionado=heroe);

  }

 
}
