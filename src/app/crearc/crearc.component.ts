import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-crearc',
  templateUrl: './crearc.component.html',
  styleUrls: ['./crearc.component.css']
})
export class CrearcComponent implements OnInit {

  mensajeeror:string=""
  emailPattern: string = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}";
  logForm!: FormGroup;
  mensaje:string=""
  actived:boolean=false;
  usuario:string=""
  constructor(private readonly fb: FormBuilder,
              private router:Router,
              private authservice: AuthService) { 

              }
 

  ngOnInit(): void {

   
    this.logForm = this.initForm();
  }

  onSubmit(): void {

    this.logForm.markAllAsTouched();
    if(this.logForm.valid){
       console.log('Form ->', this.logForm.value);
    }
   
    
    this.mensaje="Registrado"
    this.actived=true

    const {email,password}= this.logForm.value;
    this.authservice.login(email,password)
    .subscribe(ok=>{
      console.log(ok);

      
      if (ok ===true){
        this.router.navigateByUrl('/home');
      }
      else{
        Swal.fire('Error', ok, 'error');
      }
    });
  }

  initForm(): FormGroup {
    return this.fb.group({

      
      email:     ['', [Validators.required,Validators.pattern(this.emailPattern)]],
     
      password:  ['',[Validators.required, Validators.minLength(6)]],
     })
  }



  

  camponovalido(campo:string){
    return  this.logForm.get(campo)?.invalid
          && this.logForm.get(campo)?.touched
       
          

  }
}
