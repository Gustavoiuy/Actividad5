import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AcercaDNosotrosComponent } from './acerca-dnosotros/acerca-dnosotros.component';
import { HomeComponent } from './home/home.component';
import { AvisodprivComponent } from './avisodpriv/avisodpriv.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MujerComponent } from './mujer/mujer.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearcComponent } from './crearc/crearc.component';
import { CifrarComponent } from './cifrar/cifrar.component';
import { ErrorusuarioComponent } from './errorusuario/errorusuario.component';
import { AgregarusuarioComponent } from './agregarusuario/agregarusuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ValidarTokenGuard } from './guard/validar-token.guard';


const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  
  {path: 'acerca-dnosotros', component:AcercaDNosotrosComponent},
  {path: 'avisodpriv', component:AvisodprivComponent},
  {path: 'contactanos', component:ContactanosComponent},
  {path: 'mujer', component:MujerComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent },
  {path: 'cifrar',component:CifrarComponent},
  {path:  'crearc', component:CrearcComponent},
  {path:  'agregarusuario',component:AgregarusuarioComponent},
  {path:  'listar-usuario',component:ListarUsuarioComponent,
  canActivate: [ ValidarTokenGuard ],
  canLoad: [ ValidarTokenGuard ]},
  {path:  'editar-usuario/:id',component:EditarUsuarioComponent},
  
  {path:  '**',component:ErrorusuarioComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
