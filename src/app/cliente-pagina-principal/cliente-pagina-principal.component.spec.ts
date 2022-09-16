import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePaginaPrincipalComponent } from './cliente-pagina-principal.component';

describe('ClientePaginaPrincipalComponent', () => {
  let component: ClientePaginaPrincipalComponent;
  let fixture: ComponentFixture<ClientePaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePaginaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientePaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
