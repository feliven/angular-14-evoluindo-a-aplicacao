import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamento } from './excluir-pensamento';

describe('ExcluirPensamento', () => {
  let component: ExcluirPensamento;
  let fixture: ComponentFixture<ExcluirPensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirPensamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPensamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
