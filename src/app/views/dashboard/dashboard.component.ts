import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformacoesLivroComponent } from 'src/app/components/informacoes-livro/informacoes-livro.component';
import { Emprestimo } from 'src/app/models/emprestimo';
import { Livro } from 'src/app/models/livro';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['leitor', 'livro', 'dataEmprestimo', 'status', 'excluir', 'editar', 'capa'];

  dataSource: Emprestimo [] = []
  constructor(
    private emprestimoService: EmprestimoService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.listarEmprestimos()
    
  }

  public listarEmprestimos(): void {
    this.emprestimoService.listarEmprestimos().subscribe(resposta =>{
      console.log(resposta)
      this.dataSource = resposta
    })
  }

  public mostrarInformacoes(livro: Livro): void {
    this.dialog.open(InformacoesLivroComponent, {
      width: "400px",
      data: livro
    })

  }

  public deletarEmprestimo(id: string): void {
    this.emprestimoService.apagarEmprestimo(id).subscribe(resposta => {
      this.notification.exibirMsg("Empréstimo apagado.");
      this.listarEmprestimos();
    });
  }

}
