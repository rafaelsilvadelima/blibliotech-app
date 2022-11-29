import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  displayedColumns = ['titulo', 'categoria', 'autor', 'isbn', 'excluir'];

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  //esta diretiva possibilita resetar os validators após submit

  public formLivro!: FormGroup
  dataSource: Livro[] = []

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private notification: NotificationService
    ) {
      this.formLivro =fb.group ({
        titulo: ['', [Validators.required]],
        autor: ['', [Validators.required]],
        categoria: ['', [Validators.required]],
        isbn: ['', [Validators.required]],
        capa: ['', [Validators.required]],
      })
      
     }

  ngOnInit(): void {
    this.mostrarLivro()
  }

  public salvarLivro():void {
    
    if(this.formLivro.valid) {
    const livro: Livro = this.formLivro.value
    this.livroService.criarLivro(livro).subscribe(resposta => {
      this.notification.exibirMsg("Livro cadastrado com sucesso!")
      this.mostrarLivro()
      this.formLivro.reset()
      this.formGroupDirective.resetForm()
    })
    
    } else {
      this.notification.exibirMsg("Erroa ao cadastrar o livro!")
    }

  }

public mostrarLivro(): void {
  this.livroService.mostrarLivrosTabela().subscribe(resposta =>{
    this.dataSource = resposta
  })
}
 
  public excluirLivro(id: string): void {
    this.livroService.excluirLivro(id).subscribe(resposta => {
      this.notification.exibirMsg("Livro apagado com sucesso!")
      this.mostrarLivro()
    })
  }

}
