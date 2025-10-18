import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Pensamento } from '../pensamento/pensamento';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';
import { PensamentoService } from '../../../services/pensamento-service';
import { BotaoCarregarMais } from './botao-carregar-mais/botao-carregar-mais';

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
  favorito: boolean = false;

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService
      .getPensamentos(this.paginaAtual, this.filtro, undefined)
      .subscribe((listaPensamentosBackend) => {
        this.listaPensamentos = listaPensamentosBackend;
      });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.existemMaisPensamentos = true;

    if (this.favorito === true) {
      this.pensamentoService
        .getPensamentos(this.paginaAtual, this.filtro, this.favorito)
        .subscribe((listaPensamentos) => {
          this.listaPensamentos = listaPensamentos;
        });
    } else {
      this.pensamentoService
        .getPensamentos(this.paginaAtual, this.filtro, undefined)
        .subscribe((listaPensamentos) => {
          this.listaPensamentos = listaPensamentos;
        });
    }
  }

  exibirMuralCompleto() {
    this.paginaAtual = 1;
    this.existemMaisPensamentos = true;
    this.filtro = '';

    this.ngOnInit();
  }

  exibirFavoritos() {
    this.paginaAtual = 1;
    this.existemMaisPensamentos = true;
    this.favorito = true;

    this.pensamentoService
      .getPensamentos(this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaFavoritos) => {
        this.listaPensamentos = listaFavoritos;
      });
  }

  carregarMaisPensamentos() {
    this.pensamentoService
      .getPensamentos(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaPensamentosBackend) => {
        this.listaPensamentos.push(...listaPensamentosBackend);
        if (!listaPensamentosBackend.length) {
          this.existemMaisPensamentos = false;
        }
      });
  }
}
