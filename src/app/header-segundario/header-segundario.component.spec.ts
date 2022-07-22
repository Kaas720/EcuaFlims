import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSegundarioComponent } from './header-segundario.component';

describe('HeaderSegundarioComponent', () => {
  let component: HeaderSegundarioComponent;
  let fixture: ComponentFixture<HeaderSegundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSegundarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSegundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
