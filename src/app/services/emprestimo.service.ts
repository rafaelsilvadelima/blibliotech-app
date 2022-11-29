import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from , catchError, EMPTY, Observable, map } from 'rxjs';
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

    public listarEmprestimos(): Observable<any> {
      const promessa = this.fireStore.collection('emprestimo').get()
      return from(promessa).pipe(
        map((resposta: any)=>{
          return resposta.docs.map((doc: any)=> {
            const emprestimo: Emprestimo = doc.data() as Emprestimo
            emprestimo.id = doc.id
            console.log(emprestimo)
            return emprestimo
          })
        }),
        catchError(error => {
          this.notification.exibirMsg("Erro ao listar empréstimos")
          console.error(error)
          return EMPTY
        })        
      )
    }

    public apagarEmprestimo(id: string) {
      const promessa =  this.fireStore.collection("emprestimo").doc(id).delete();
      return from(promessa).pipe(
        catchError(error => {
          this.notification.exibirMsg("Erro ao excluir empréstimo.");
          console.error(error);
          return EMPTY;
        })
      );
    }

}
