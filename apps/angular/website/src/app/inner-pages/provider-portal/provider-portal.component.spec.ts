/**
 * Unit test suite for ProviderPortalComponent.
 *
 * This test suite verifies the basic creation of the component instance
 * to ensure it initializes correctly within the Angular testing environment.
 *
 * Setup:
 * - Configures the testing module with the ProviderPortalComponent declared.
 * - Creates a component fixture and initializes change detection.
 *
 * Tests:
 * - Checks that the component instance is created successfully.
 *
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPortalComponent } from './provider-portal.component';

describe('ProviderPortalComponent', () => {
  let component: ProviderPortalComponent;
  let fixture: ComponentFixture<ProviderPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderPortalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProviderPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
