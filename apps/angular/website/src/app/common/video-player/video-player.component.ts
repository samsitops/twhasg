/**

| VideoPlayerComponent

@file video-player.component.ts

Description
Angular standalone component for displaying a video player with controls.

Features
Input property video to bind video data including URL, mute state, and play state.

Controls to mute/unmute the video.

Play/pause toggle functionality.

Fullscreen toggle support using browser Fullscreen API.

Uses ViewChild to access native video element for direct DOM control.

Notes
The component expects the video object to have mutable properties: muted and playing.

Video playback is controlled via native HTML5 video element methods.

Usage
<app-video-player [video]="selectedVideo"></app-video-player>

© 2025 Dream Care DreamCare@gmail.com

GitHub: @DreamCare ▸ MIT Licensed

*/

import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-video-player',
    standalone: true,
    imports: [],
    templateUrl: './video-player.component.html',
    styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
    @Input() video: any;
    @ViewChild('videoPlayer', { static: false })
    videoPlayer!: ElementRef<HTMLVideoElement>;
    muteVideo() {
        this.video.muted = !this.video.muted;
        this.videoPlayer.nativeElement.muted =
            !this.videoPlayer.nativeElement.muted;
    }

    toggleVideo() {
        const videoElement = this.videoPlayer.nativeElement;
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
                this.video.playing = true;
            } else {
                videoElement.pause();
                this.video.playing = false;
            }
        }
    }
    toggleFullScreen() {
        const videoElement = this.videoPlayer.nativeElement;
        if (videoElement) {
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            }
        }
    }
}
