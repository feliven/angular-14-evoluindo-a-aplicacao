import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Pensamento } from '../pensamento/pensamento';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';
import { PensamentoService } from '../../../services/pensamento-service';

@Component({
  selector: 'app-listar-pensamento',
  imports: [CommonModule, RouterLink, Pensamento],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css',
})
export class ListarPensamento implements OnInit {
  listaPensamentos: InterfacePensamento[] = [];
  paginaAtual: number = 1;

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
    this.pensamentoService.getPensamentos(this.paginaAtual).subscribe((listaPensamentosBackend) => {
      this.listaPensamentos = listaPensamentosBackend;
    });
  }
}
