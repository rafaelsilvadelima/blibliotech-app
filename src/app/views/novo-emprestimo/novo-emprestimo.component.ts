import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Livro } from 'src/app/models/livro';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { LivroService } from 'src/app/services/livro.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.css']
})
export class NovoEmprestimoComponent implements OnInit {

  public livros: Livro [] = []
  public formEmprestimo!: FormGroup

  constructor(
    fb: FormBuilder,
    private notification: NotificationService,
    private router: Router,
    private emprestimoService: EmprestimoService,
    private livrosService: LivroService
    ) {
      this.formEmprestimo = fb.group({
        leitor: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', [Validators.required]],
        status: ['', [Validators.required]],
        livro: ['', [Validators.required]]
      })
     }

  ngOnInit(): void {
    this.buscarLivros()
  }


  public cadastrarEmprestimo():void {
    if(this.formEmprestimo.valid) {
      const emprestimo: Emprestimo = this.formEmprestimo.value
      this.emprestimoService.cadastrarEmprestimo(emprestimo).subscribe(resposta=> {
        this.notification.exibirMsg("Empréstimo cadastrado com sucesso!")
        this.router.navigate(["/dashboard"])
      }
        )
    }else {
      this.notification.exibirMsg("Erro ao cadastrar empréstimo.")
    }
  }

  public buscarLivros(): void {
    this.livrosService.mostrarLivrosTabela().subscribe(resposta => {
      this.livros = resposta
    })
  }

}
