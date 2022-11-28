import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc } from 'firebase/firestore';
import { from , catchError, EMPTY, Observable, map } from 'rxjs';
import { Livro } from '../models/livro';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    private fireStore: AngularFirestore,
    private notification: NotificationService
    ) { }

    public criarLivro(livro: Livro): Observable<any> {
      const promessa = this.fireStore.collection('livro').add(livro)
      return from(promessa).pipe(
        catchError(erro => {
          this.notification.exibirMsg("Erro ao cadastrar livro.")
          console.error(erro)
          return EMPTY
        })
      )
    }

    public mostrarLivrosTabela(): Observable<any> {
      const promessa = this.fireStore.collection('livro').get()
      return from(promessa).pipe(
        map((reposta: any)=> {
          return reposta.docs.map((doc:any)=> {
            const livro: Livro = doc.data() as Livro
            livro.id = doc.id
            return livro
          })
        })
      )
    }


    public excluirLivro(id: string) {
      const promessa = this.fireStore.collection('livro').doc(id).delete()
      return from(promessa).pipe(
        catchError(error => {
          this.notification.exibirMsg('Erro ao excluir livro.')
          console.error(error)
          return EMPTY
        })
      )
    }

    public buscarLivroPorID(id: string): Observable<any> {
      const promessa = this.fireStore.collection('livro').doc(id).get()
      return from(promessa).pipe(
        catchError(error => {
          this.notification.exibirMsg('O livro não foi encontrado.')
          console.error(error)
          return EMPTY
        })
      )
      
    }
}
