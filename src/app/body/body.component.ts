import {  ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe, usuario } from '../interfaces/bordados.interface';
import { BordadosService } from '../servicios/bordados.service';
import { Publisher } from '../interfaces/bordados.interface';
import { AuthService } from '../servicios/auth.service';
import { Component, Renderer2 } from '@angular/core';
interface Food {
 
  Categoria: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {
 

  selectedCar!: string;

  foods: Food[] = [
    { Categoria: 'Dc comics'},
    { Categoria: 'Marvel comics'}
    
  ];

  

 

  @ViewChild("myButton") myButton!: ElementRef ;



  selectedValue: string="";
  Termino:string ="";
  constructor(private bordadosService: BordadosService,
              private authservice: AuthService,
              private renderer: Renderer2) { }

              clickButton(){
               
                this.renderer.selectRootElement(this.myButton.nativeElement).click();
              }

  
  heroe : Heroe[]=[]
  heroeSeleccionado: Heroe | undefined;
 catheroe:boolean=false;
 
  opcionselec: Heroe[]=[]

  
  buscando(){
    this.bordadosService.getSugerenias(this.Termino.trim() )
    .subscribe(heroes => this.heroe= heroes);
  }

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

  filtar(){
    if(this.selectedValue!=""){

      console.log(this.selectedValue)
    this.bordadosService.getpublisher(this.selectedValue).subscribe(
      opcionsel =>this.opcionselec=opcionsel)
      this.catheroe=true


      
    }
    else{
      console.log('No se encontro ni vergas')
    }
    
      
}
  



 


  ngOnInit(): void {
   
  
  }
  





}
