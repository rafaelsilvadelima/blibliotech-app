import { Component, OnInit } from '@angular/core';
import { Emprestimo } from 'src/app/models/emprestimo';
import { EmprestimoService } from 'src/app/services/emprestimo.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['leitor', 'livro', 'dataEmprestimo', 'status', 'excluir', 'editar', 'capa'];

  dataSource: Emprestimo [] = []
  constructor(
    private emprestimoService: EmprestimoService
  ) { }

  ngOnInit(): void {
    this.listarEmprestimos()
  }

  public listarEmprestimos(): void {
    this.emprestimoService.listarEmprestimo().subscribe(resposta =>{
      console.log(resposta)
      this.dataSource = resposta
    })
  }

}
