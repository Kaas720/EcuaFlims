import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminoDeUsoComponent } from './termino-de-uso.component';

describe('TerminoDeUsoComponent', () => {
  let component: TerminoDeUsoComponent;
  let fixture: ComponentFixture<TerminoDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminoDeUsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminoDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
