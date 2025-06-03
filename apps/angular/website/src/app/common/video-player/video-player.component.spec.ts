/**

| VideoPlayerComponent Unit Test

@file video-player.component.spec.ts

Purpose
Unit tests to verify the creation and basic initialization of VideoPlayerComponent.

Test Setup
Configures Angular TestBed with VideoPlayerComponent imported as standalone.

Creates component instance and triggers change detection.

Tests Included
Verifies component instance is created successfully.

Recommendations
Extend tests to cover video playback controls and event handling.

Test UI state changes such as mute/unmute and fullscreen toggle.

Add mocks/spies if VideoPlayerComponent uses external services or emits events.

© 2025 Dream Care DreamCare@gmail.com

GitHub: @DreamCare ▸ MIT Licensed

*/


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerComponent } from './video-player.component';

describe('VideoPlayerComponent', () => {
  let component: VideoPlayerComponent;
  let fixture: ComponentFixture<VideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPlayerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
