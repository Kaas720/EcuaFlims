import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesPeliculaComponent } from './reportes-pelicula.component';

describe('ReportesPeliculaComponent', () => {
  let component: ReportesPeliculaComponent;
  let fixture: ComponentFixture<ReportesPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
