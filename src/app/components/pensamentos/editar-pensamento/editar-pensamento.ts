import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PensamentoService } from '../../../services/pensamento-service';

@Component({
  selector: 'app-editar-pensamento',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css',
})
export class EditarPensamento implements OnInit {
  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: 0,
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      modelo: ['', Validators.required],
    });

    const idComoString = this.activatedRoute.snapshot.paramMap.get('id');
    const id = parseInt(idComoString!);

    this.pensamentoService.buscarPorId(id).subscribe((pensamento) => {
      this.formulario.patchValue({
        id: pensamento.id,
        conteudo: pensamento.conteudo,
        autoria: pensamento.autoria,
        modelo: pensamento.modelo,
      });
    });
  }

  editarPensamento() {
    if (this.formulario.valid) {
      this.pensamentoService.editPensamento(this.formulario.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  habilitarBotaoSalvar() {
    if (this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao-desabilitado';
    }
  }

  cancelar() {
    console.log('CANCELLED!');
    this.router.navigate(['/']);
  }
}
