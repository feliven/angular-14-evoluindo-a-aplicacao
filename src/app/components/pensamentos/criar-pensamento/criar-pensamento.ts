import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from '../../../services/pensamento-service';

@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, ReactiveFormsModule],
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

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      conteudo: ['digite seu conteúdo'],
      autoria: ['pessoa autora'],
      modelo: ['modelo2'],
    });
  }

  criarPensamento() {
    console.log('criado');
    this.pensamentoService
      .setPensamento(this.formulario.value)
      .subscribe(() => this.router.navigate(['/']));
  }

  cancelar() {
    console.log('CANCELLED!');
    this.router.navigate(['/']);
  }
}
