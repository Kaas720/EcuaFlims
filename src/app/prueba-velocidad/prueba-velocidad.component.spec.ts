import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaVelocidadComponent } from './prueba-velocidad.component';

describe('PruebaVelocidadComponent', () => {
  let component: PruebaVelocidadComponent;
  let fixture: ComponentFixture<PruebaVelocidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaVelocidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaVelocidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
