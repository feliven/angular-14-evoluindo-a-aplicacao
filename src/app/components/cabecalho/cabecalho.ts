import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  constructor(private router: Router) {}

  vaiParaPaginaInicial() {
    // console.log('img clicada');
    this.router.navigate(['/']);
  }
}
