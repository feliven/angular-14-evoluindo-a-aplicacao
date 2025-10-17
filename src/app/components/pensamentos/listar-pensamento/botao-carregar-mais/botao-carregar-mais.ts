import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  imports: [],
  templateUrl: './botao-carregar-mais.html',
  styleUrl: './botao-carregar-mais.css',
})
export class BotaoCarregarMais {
  @Input() existemMaisPensamentos: boolean = false;
}
