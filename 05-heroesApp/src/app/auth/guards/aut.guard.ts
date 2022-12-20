import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanLoad {
  router: any;

  constructor(private authService: AuthService) {
 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>  {
      // if(this.authService.auth.id) {
      //   return true;
      // }
      // console.log('Bloqueado por el canActivate');
      //   return true;
      return this.authService.verificaAutenticacion()
        .pipe(
          tap(
            estaAutenticado => {
              if (!estaAutenticado) {
                this.router.navigate(['./auth/login'])
              }
            }
          )
        ) 
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>  {

      return this.authService.verificaAutenticacion()
        .pipe(
          tap(
            estaAutenticado => {
              if (!estaAutenticado) {
                this.router.navigate(['./auth/login'])
              }
            }
          )
        ) 
  }
}
