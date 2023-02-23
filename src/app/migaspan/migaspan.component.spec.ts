import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigaspanComponent } from './migaspan.component';

describe('MigaspanComponent', () => {
  let component: MigaspanComponent;
  let fixture: ComponentFixture<MigaspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigaspanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigaspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
