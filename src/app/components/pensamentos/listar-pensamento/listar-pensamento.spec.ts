import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamento } from './listar-pensamento';

describe('ListarPensamento', () => {
  let component: ListarPensamento;
  let fixture: ComponentFixture<ListarPensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPensamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
