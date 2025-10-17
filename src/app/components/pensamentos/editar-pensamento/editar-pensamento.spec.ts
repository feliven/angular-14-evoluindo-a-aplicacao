import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPensamento } from './editar-pensamento';

describe('EditarPensamento', () => {
  let component: EditarPensamento;
  let fixture: ComponentFixture<EditarPensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPensamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPensamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
