import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { catchError, EMPTY, from, Observable } from 'rxjs';
import { User } from '../models/user';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireBaseAuth: AngularFireAuth,
    private notification: NotificationService
    ) { }

    public autenticarGoogle(): Observable<any> {
      const googleAuth = new GoogleAuthProvider();
      const promessa = this.fireBaseAuth.signInWithPopup(googleAuth);
      return from(promessa).pipe(
        catchError(error => {
          this.notification.exibirMsg("Erro ao auntenticar com o Google");
          console.error(error);
          return EMPTY;
        })
      )
    }

    public autenticarEmailSenha(user: User): Observable<any> {
      const promessa = this.fireBaseAuth.signInWithEmailAndPassword(user.email, user.senha)
      return from(promessa).pipe(
        catchError(error => {
          if(error.code == "auth/user-not-found"){
            this.notification.exibirMsg("Usuario não cadastrado.")

            }else if (error.code == "auth/wrong-password") {
              this.notification.exibirMsg("Senha incorreta.")
              console.error(error)

            } else if (error.code == "auth/invalid-email") {
            this.notification.exibirMsg("Email incorreto.")
              console.error(error)
            } else {
              this.notification.exibirMsg("Error ao autenticar.")
              console.error(error)
            }
            return EMPTY;
            
            
            
          
        })
      )
      
    }

    public cadastarUsuario(user: User):Observable<any> {
      const promessa = this.fireBaseAuth.createUserWithEmailAndPassword(user.email, user.senha)
      return from(promessa).pipe(
        catchError(error => {
          this.notification.exibirMsg("Erro ao cadastrar o usuário.")
          console.error(error)
          return EMPTY
        })
      )
    }

    sair() {
      const promessa = this.fireBaseAuth.signOut()
      return from(promessa)
    }

}
