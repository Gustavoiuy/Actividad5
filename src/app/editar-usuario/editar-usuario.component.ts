import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute}from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ServiciocrudService } from '../servicios/serviciocrud.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  elId:any;
  formulariodeusuarios:FormGroup;
  constructor(
    private activeRoute:ActivatedRoute,
    private serviciocrud:ServiciocrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    this.elId=this.activeRoute.snapshot.paramMap.get('id');
    this.serviciocrud.obtenerUsuario(this.elId).subscribe(
      respuesta=>{
     this.formulariodeusuarios.setValue({
      nombre:respuesta[0]['nombre'],
      correo:respuesta[0]['correo']
    });
  }
    );

    this.formulariodeusuarios=this.formulario.group({

    
      nombre:[''],
      correo:['']

    }

    );
  
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    this.serviciocrud.EditarUsuarios(this.elId,this.formulariodeusuarios.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/listar-usuario');
 
    }   );
  }

}
