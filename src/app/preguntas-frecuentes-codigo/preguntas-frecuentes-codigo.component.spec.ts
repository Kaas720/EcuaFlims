import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecuentesCodigoComponent } from './preguntas-frecuentes-codigo.component';

describe('PreguntasFrecuentesCodigoComponent', () => {
  let component: PreguntasFrecuentesCodigoComponent;
  let fixture: ComponentFixture<PreguntasFrecuentesCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasFrecuentesCodigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasFrecuentesCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
