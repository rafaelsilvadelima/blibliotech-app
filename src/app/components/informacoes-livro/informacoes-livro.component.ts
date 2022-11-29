import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-informacoes-livro',
  templateUrl: './informacoes-livro.component.html',
  styleUrls: ['./informacoes-livro.component.css']
})
export class InformacoesLivroComponent implements OnInit {

  //injetando com MAT_DIALOG_DATA, para que seja possivel pegar as informações de livro para um componente
   constructor(@Inject(MAT_DIALOG_DATA) public livro: Livro) { }

  ngOnInit(): void {
  }

}
