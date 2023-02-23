import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { Usuario } from '../servicios/usuario';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
    private router: Router ){}
    
  canActivate(): Observable  <boolean> | boolean {
    return this.authService.validarToken()
    .pipe(
      tap( valid => {
        if ( !valid ) {
          this.router.navigateByUrl('/home');
        }
      })
    );
    console.log('canactived');
    
  }
  canLoad(): Observable<boolean>| boolean{
    return this.authService.validarToken()
    .pipe(
      tap( valid => {
        if ( !valid ) {
          this.router.navigateByUrl('/home');
        }
      })
    );
   
  }
}


