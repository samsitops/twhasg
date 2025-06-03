/**

|--------------------------------------------------------------------------
| Research Details Component Test Suite
|--------------------------------------------------------------------------
@component
@selector ResearchDetailsComponent
Core Responsibilities
Test the initialization and basic functionality of the ResearchDetailsComponent
@dependencies
Angular: ComponentFixture, TestBed
@version
Last Updated: 2023-11-07
@maintenance
Update tests as component functionality evolves
Ensure tests cover new features and edge cases
@contact
Owner: UI Team
Support: ui-team@dreamcare.com
GitHub: /DreamCare/ui-core/research
|-------------------------------------------------------------------------- */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDetailsComponent } from './research-details.component';

describe('ResearchDetailsComponent', () => {
  let component: ResearchDetailsComponent;
  let fixture: ComponentFixture<ResearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ResearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
