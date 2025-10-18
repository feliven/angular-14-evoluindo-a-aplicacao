import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';
import { RouterLink } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento-service';

@Component({
  selector: 'app-pensamento',
  imports: [NgClass, RouterLink],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css',
})
export class Pensamento {
  @Input() pensamento: InterfacePensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  constructor(private pensamentoService: PensamentoService) {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarFavorito(): string {
    if (this.pensamento.favorito === false) {
      return 'inativo';
    } else return 'ativo';
  }

  atualizarFavorito() {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe();
  }
}
