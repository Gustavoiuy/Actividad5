import { Component, OnInit } from '@angular/core';
import { ServiciocrudService } from '../servicios/serviciocrud.service';
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  Usuarios:any;

  constructor(
    private authservice:AuthService
  ) { }

  ngOnInit(): void {

    this.authservice.listarusuarios().subscribe(respuesta=>{
      console.log(respuesta); 
      this.Usuarios=respuesta;
    }); 
  }

//   borrarregistro(id:any,iControl:any){
//     if(window.confirm("¿Desea Borrar el Registro?")){
//     this.serviciocrud.borrarUsuarios(id).subscribe((respuesta)=>{
//       this.Usuarios.splice(iControl,1);
        
//   });
// }
// }
}