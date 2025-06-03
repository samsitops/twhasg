/**
 * Unit tests for VideoDetailsComponent.
 *
 * This test suite verifies the basic creation of the VideoDetailsComponent.
 * It sets up the Angular testing module, compiles the component,
 * creates a fixture and an instance of the component,
 * and checks if the component is created successfully.
 *
 * Test cases:
 * - should create: ensures the component instance is created and truthy.
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailsComponent } from './video-details.component';

describe('VideoDetailsComponent', () => {
  let component: VideoDetailsComponent;
  let fixture: ComponentFixture<VideoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
