import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from , catchError, EMPTY, Observable } from 'rxjs';
import { Emprestimo } from '../models/emprestimo';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(
    private notification: NotificationService,
    private fireStore: AngularFirestore

  ) { }

    public cadastrarEmprestimo(emprestimo: Emprestimo): Observable<any> {
      const promessa = this.fireStore.collection('emprestimo').add(emprestimo)
      return from(promessa).pipe(
        catchError(erro => {
          this.notification.exibirMsg("Erro ao cadastrar empréstimo.")
          console.error(erro)
          return EMPTY
        })
      )
    }

    public listarEmprestimo():Observable<any> {
      const promessa = this.fireStore.collection('emprestimo').get()
      return from(promessa).pipe(
        catchError(error => {
          this.notification.exibirMsg("Errou ao listar objeto.")
          console.error(error)
          return EMPTY
        })
      )
    }


}
