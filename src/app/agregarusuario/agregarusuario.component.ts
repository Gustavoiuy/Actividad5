import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ServiciocrudService } from '../servicios/serviciocrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.component.html',
  styleUrls: ['./agregarusuario.component.css']
})
export class AgregarusuarioComponent implements OnInit {
formulariodeusuarios:FormGroup;


  constructor(
    public formulario:FormBuilder,
    private serviciocrud:ServiciocrudService,
    private ruteador:Router,
    
    private readonly fb: FormBuilder

    ) { 
    
    this.formulariodeusuarios = this.initForm();
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formulariodeusuarios.value);
    if(window.confirm("USUARIO REGISTRADO CON EXITIO!!")){this.serviciocrud.AgregarUsuarios(this.formulariodeusuarios.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-usuario');
     
    } );}
    
   
  

}

initForm(): FormGroup {
  return this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    correo: ['', [Validators.required,Validators.email]]})
    
}

}

