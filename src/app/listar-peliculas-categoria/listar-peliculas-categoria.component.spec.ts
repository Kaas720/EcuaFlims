import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPeliculasCategoriaComponent } from './listar-peliculas-categoria.component';

describe('ListarPeliculasCategoriaComponent', () => {
  let component: ListarPeliculasCategoriaComponent;
  let fixture: ComponentFixture<ListarPeliculasCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPeliculasCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPeliculasCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
