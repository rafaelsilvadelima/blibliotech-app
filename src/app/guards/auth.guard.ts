import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router, 
    private notification: NotificationService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.firebaseAuth
    .authState
      .pipe(
        map(user => {
          if(user) {
            return true;
          } else {
            this.notification.exibirMsg("Acesso negado! Realize o login")
            this.router.navigate(["/login"])
            return false;
          }
        })
      )

  }
  
}
