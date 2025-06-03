/**
 * Unit tests for PatientStatusComponent.
 * 
 * This test suite initializes the component and verifies its creation.
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStatusComponent } from './patient-status.component';

describe('PatientStatusComponent', () => {
  let component: PatientStatusComponent;
  let fixture: ComponentFixture<PatientStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientStatusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PatientStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
