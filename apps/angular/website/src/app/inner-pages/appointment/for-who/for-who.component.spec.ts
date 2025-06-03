/**
 * Unit tests for ForWhoComponent.
 *
 * This test suite:
 * - Configures the testing module with the ForWhoComponent declaration.
 * - Creates a component instance and fixture before each test.
 * - Verifies that the component is created successfully.
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWhoComponent } from './for-who.component';

describe('ForWhoComponent', () => {
  let component: ForWhoComponent;
  let fixture: ComponentFixture<ForWhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForWhoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ForWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
