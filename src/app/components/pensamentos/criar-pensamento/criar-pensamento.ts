import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PensamentoService } from '../../../services/pensamento-service';
import { minusculoValidator } from '../../../shared/minusculo-validator';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento implements OnInit {
  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        'digite seu conteúdo',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          minusculoValidator,
        ]),
      ],
      autoria: [
        'pessoa autora',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      modelo: ['', Validators.required],
      favorito: [false],
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.pensamentoService
        .setPensamento(this.formulario.value)
        .subscribe(() => this.router.navigate(['/']));
      console.log('criado');
    } else {
      alert('Preencha todos os campos');
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
