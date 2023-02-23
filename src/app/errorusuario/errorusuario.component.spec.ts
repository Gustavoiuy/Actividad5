import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorusuarioComponent } from './errorusuario.component';

describe('ErrorusuarioComponent', () => {
  let component: ErrorusuarioComponent;
  let fixture: ComponentFixture<ErrorusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
