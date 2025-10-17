import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento-service';
import { InterfacePensamento } from '../../../interfaces/interface-pensamento';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento {
  pensamentoASerEditado: InterfacePensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
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
      .subscribe((pensamento) => (this.pensamentoASerEditado = pensamento));
  }

  editarPensamento() {
    if (this.pensamentoASerEditado.id) {
      this.pensamentoService.editPensamento(this.pensamentoASerEditado).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  cancelar() {
    console.log('CANCELLED!');
    this.router.navigate(['/']);
  }
}
