import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pensamento } from './pensamento';

describe('Pensamento', () => {
  let component: Pensamento;
  let fixture: ComponentFixture<Pensamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pensamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pensamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
