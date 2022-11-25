import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formulario!: FormGroup;

  constructor(
    private authService: AuthService,
    private notication: NotificationService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.formulario = fb.group({
      email: ['', [Validators.required,Validators.email]],
      senha: ['', [Validators.required]]
    })

  }

  public logarGoogle(): void {
    this.authService.autenticarGoogle().subscribe(credencial => {
      this.notication.exibirMsg('Bem vindo(a)!');
      this.router.navigate(["/home"])
    }    )  }

    public logarEmailSenha(): void {
      if(this.formulario.valid) {
        const user: User = this.formulario.value
        this.authService.autenticarEmailSenha(user).subscribe(credencial => {
        this.notication.exibirMsg("Autenticado com Email e Senha!")
        this.router.navigate(["/home"])
        })
      } else {
        this.notication.exibirMsg("Dados inválidos")
      }
    }


}
