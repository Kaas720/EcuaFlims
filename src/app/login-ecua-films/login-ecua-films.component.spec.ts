import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEcuaFilmsComponent } from './login-ecua-films.component';

describe('LoginEcuaFilmsComponent', () => {
  let component: LoginEcuaFilmsComponent;
  let fixture: ComponentFixture<LoginEcuaFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEcuaFilmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEcuaFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
