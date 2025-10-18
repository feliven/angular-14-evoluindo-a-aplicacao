import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Pensamento } from '../pensamento/pensamento';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';
import { PensamentoService } from '../../../services/pensamento-service';
import { BotaoCarregarMais } from './botao-carregar-mais/botao-carregar-mais';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-pensamento',
  imports: [CommonModule, RouterLink, Pensamento, BotaoCarregarMais, FormsModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit {
  listaPensamentos: InterfacePensamento[] = [];
  paginaAtual: number = 1;
  existemMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.getPensamentos(this.paginaAtual).subscribe((listaPensamentosBackend) => {
      this.listaPensamentos = listaPensamentosBackend;
    });
  }

  carregarMaisPensamentos() {
    this.pensamentoService
      .getPensamentos(++this.paginaAtual)
      .subscribe((listaPensamentosBackend) => {
        this.listaPensamentos.push(...listaPensamentosBackend);
        if (!listaPensamentosBackend.length) {
          this.existemMaisPensamentos = false;
        }
      });
  }
}
