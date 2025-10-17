import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarMais } from './botao-carregar-mais';

describe('BotaoCarregarMais', () => {
  let component: BotaoCarregarMais;
  let fixture: ComponentFixture<BotaoCarregarMais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCarregarMais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarMais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
