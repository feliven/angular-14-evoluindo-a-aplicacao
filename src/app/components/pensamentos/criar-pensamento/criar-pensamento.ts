import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento-service';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {
  pensamento = {
    conteudo: 'Exemplo de conteúdo',
    autoria: 'Pessoa autora',
    modelo: 'modelo2',
  };

  constructor(private pensamentoService: PensamentoService, private router: Router) {}

  criarPensamento() {
    console.log('criado');
    this.pensamentoService
      .setPensamento(this.pensamento)
      .subscribe(() => this.router.navigate(['/']));
  }

  cancelar() {
    console.log('CANCELLED!');
    this.router.navigate(['/']);
  }
}
