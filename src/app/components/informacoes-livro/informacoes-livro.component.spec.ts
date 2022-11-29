import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesLivroComponent } from './informacoes-livro.component';

describe('InformacoesLivroComponent', () => {
  let component: InformacoesLivroComponent;
  let fixture: ComponentFixture<InformacoesLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
