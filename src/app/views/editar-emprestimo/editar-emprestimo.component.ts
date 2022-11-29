import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Livro } from 'src/app/models/livro';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { LivroService } from 'src/app/services/livro.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  public livros: Livro [] = []
  public emprestimo!: Emprestimo

  constructor(
    private notification: NotificationService,
    private router: Router,
    private emprestimoService: EmprestimoService,
    private livrosService: LivroService,
    private route: ActivatedRoute
    ) {
      
     }

  ngOnInit(): void {
    this.exibirEmprestimo()
  }

  public exibirEmprestimo():void {
    const id = this.route.snapshot.params['id']
    //alert(id)
    this.emprestimoService.buscarEmprestimoPorId(id).subscribe(emprestimo => {
      this.emprestimo = emprestimo
      
    })
  }

  public editarEmprestimo(formulario: NgForm) {
    if(formulario.valid) {
      this.emprestimoService.atualizarEmprestimo(this.emprestimo).subscribe(resposta => {
        this.notification.exibirMsg("Empréstimo atualizado com sucesso!")
        this.router.navigate(["/dashboard"])
      })
    } else {
      this.notification.exibirMsg("Dados inválidos.")
    }
  }

}
