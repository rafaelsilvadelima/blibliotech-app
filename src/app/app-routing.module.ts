import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditarEmprestimoComponent } from './views/editar-emprestimo/editar-emprestimo.component';
import { HomeComponent } from './views/home/home.component';
import { InscricaoComponent } from './views/inscricao/inscricao.component';
import { LivrosComponent } from './views/livros/livros.component';
import { LoginComponent } from './views/login/login.component';
import { NovoEmprestimoComponent } from './views/novo-emprestimo/novo-emprestimo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "Home | Blibiotech"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Blibiotech"
  },
  {
    path: 'inscricao',
    component: InscricaoComponent,
    title: "Inscrição | Blibiotech"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: "Painel de Controle | Blibiotech"
  },
  {
    path: 'dashboard/new',
    component: NovoEmprestimoComponent,
    title: "Novo Empréstimo | Blibiotech"
  },
  {
    path: 'dashboard/edit',
    component: EditarEmprestimoComponent,
    title: "Editar Empréstimo | Blibiotech"
  },
    {
    path: 'livro',
    component: LivrosComponent,
    title: "Livros | Blibiotech"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
