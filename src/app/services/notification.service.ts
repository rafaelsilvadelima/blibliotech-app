import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  public exibirMsg(msg: string): void {
    this.snackBar.open(msg, "Fechar", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
    })
  }




}