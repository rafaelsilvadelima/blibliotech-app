import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent  {

  public cadastrarFormulario!: FormGroup
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService,

  ) {
    this.cadastrarFormulario = fb.group ({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]]
    })
   }

   public cadastrarGoogle(): void {
    this.authService.autenticarGoogle().subscribe(credencial => {
      this.notification.exibirMsg("Usuário cadastrado com sucesso!")
      this.router.navigate(["/login"])
    }
    )
   }

   public cadastrarUsuario(): void {
    if(this.cadastrarFormulario.valid) {
      const user: User = this.cadastrarFormulario.value;
      this.authService.cadastarUsuario(user).subscribe(credencial => {
        this.notification.exibirMsg("Usuário cadastrado com sucesso!")
        this.router.navigate(["/login"])
      }
      
      )
    } else {
      this.notification.exibirMsg("Dados inválidos")
    }
   }

}
