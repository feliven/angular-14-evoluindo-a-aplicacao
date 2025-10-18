import { Component, OnInit } from '@angular/core';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';
import { PensamentoService } from '../../../services/pensamento-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css',
})
export class ExcluirPensamento implements OnInit {
  pensamentoASerExcluido: InterfacePensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const idComoString = this.activatedRoute.snapshot.paramMap.get('id');
    const id = parseInt(idComoString!);
    this.pensamentoService
      .buscarPorId(id)
      .subscribe((pensamento) => (this.pensamentoASerExcluido = pensamento));
  }

  excluirPensamento() {
    if (this.pensamentoASerExcluido.id) {
      this.pensamentoService.deletePensamento(this.pensamentoASerExcluido.id).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
