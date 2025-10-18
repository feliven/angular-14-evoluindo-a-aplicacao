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
  listaFavoritos: InterfacePensamento[] = [];

  private readonly TITULO_MURAL: string = 'Meu Mural';
  private readonly TITULO_FAVORITOS: string = 'Meus Favoritos';

  titulo: string = this.TITULO_MURAL;

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.carregarPensamentos();
  }

  private carregarPensamentos(): void {
    this.pensamentoService
      .getPensamentos(this.paginaAtual, this.filtro, this.favorito || undefined)
      .subscribe((listaPensamentosBackend) => {
        this.listaPensamentos = listaPensamentosBackend;
        if (this.favorito) {
          this.listaFavoritos = listaPensamentosBackend;
        }
      });
  }

  carregarMaisPensamentos(): void {
    this.pensamentoService
      .getPensamentos(++this.paginaAtual, this.filtro, this.favorito || undefined)
      .subscribe((listaPensamentosBackend) => {
        this.listaPensamentos.push(...listaPensamentosBackend);
        if (!listaPensamentosBackend.length) {
          this.existemMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos(): void {
    this.resetarPaginacao();
    this.carregarPensamentos();
  }

  exibirFavoritos(): void {
    this.titulo = this.TITULO_FAVORITOS;

    this.resetarPaginacao();
    this.favorito = true;
    this.carregarPensamentos();
  }

  exibirMuralCompleto(): void {
    this.titulo = this.TITULO_MURAL;

    this.resetarPaginacao();
    this.filtro = '';
    this.favorito = false;
    this.carregarPensamentos();
  }

  private resetarPaginacao(): void {
    this.paginaAtual = 1;
    this.existemMaisPensamentos = true;
  }
}
