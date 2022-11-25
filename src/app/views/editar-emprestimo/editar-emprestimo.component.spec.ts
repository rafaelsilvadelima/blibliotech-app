import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmprestimoComponent } from './editar-emprestimo.component';

describe('EditarEmprestimoComponent', () => {
  let component: EditarEmprestimoComponent;
  let fixture: ComponentFixture<EditarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
