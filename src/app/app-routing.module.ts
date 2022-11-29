import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditarEmprestimoComponent } from './views/editar-emprestimo/editar-emprestimo.component';
import { HomeComponent } from './views/home/home.component';
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
    canActivate: [ AuthGuard ],
    title: "Home | Blibiotech"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Blibiotech"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    title: "Painel de Controle | Blibiotech"
  },
  {
    path: 'dashboard/new',
    component: NovoEmprestimoComponent,
    canActivate: [ AuthGuard ],
    title: "Novo Empréstimo | Blibiotech"
  },
  {
    path: 'dashboard/edit',
    component: EditarEmprestimoComponent,
    canActivate: [ AuthGuard ],
    title: "Editar Empréstimo | Blibiotech"
  },
    {
    path: 'livro',
    component: LivrosComponent,
    canActivate: [ AuthGuard ],
    title: "Livros | Blibiotech"
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent,
    title: "Cadastrar | Blibiotech"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
