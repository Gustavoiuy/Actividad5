import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDNosotrosComponent } from './acerca-dnosotros.component';

describe('AcercaDNosotrosComponent', () => {
  let component: AcercaDNosotrosComponent;
  let fixture: ComponentFixture<AcercaDNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
