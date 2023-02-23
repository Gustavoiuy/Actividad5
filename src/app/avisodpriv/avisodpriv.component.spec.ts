import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisodprivComponent } from './avisodpriv.component';

describe('AvisodprivComponent', () => {
  let component: AvisodprivComponent;
  let fixture: ComponentFixture<AvisodprivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisodprivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisodprivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
