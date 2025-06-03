/**
 * Unit tests for the RequestComponent.
 *
 * This suite tests the creation and basic initialization
 * of the RequestComponent using Angular's TestBed framework.
 *
 * It ensures the component instance is created successfully.
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
