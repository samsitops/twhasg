
/**
 * Library Component
 * 
 * Standalone component for displaying and managing video content in the application.
 * Handles routing to individual videos via slug parameters and displays appropriate content.
 * 
 * Features:
 * - Displays either a video list or single video based on route
 * - Integrates with common application components (navbar, footer, etc.)
 * - Responsive layout with sidebar navigation
 * 
 * Dependencies:
 * - videos.ts for video data source
 * - Multiple shared UI components
 * - Angular Router for navigation
 */

import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { LibrarySidebarComponent } from '../../common/library-sidebar/library-sidebar.component';
import { BannerComponent } from '../../demos/home-demo-one/banner/banner.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { videos } from '../../shared/consts/videos';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-library',
    standalone: true,
    imports: [
        NavbarComponent,
        BackToTopComponent,
        FooterComponent,
        LibrarySidebarComponent,
        BannerComponent,
        InnerPageBannerComponent,
        NgIf,
        NgFor,
        RouterModule,
    ],
    templateUrl: './library.component.html',
    styleUrl: './library.component.scss',
})
export class LibraryComponent {
    videos = videos; // Imported from your videos.ts file
    selectedVideo: any = null; // Store the selected video
    slug: string | null = null;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.slug = params['slug'];
            this.findVideoBySlug();
        });
    }

    findVideoBySlug(): void {
        if (this.slug) {
            // Find the video that matches the slug
            this.selectedVideo = this.videos.find(
                (video) => video.slug === this.slug
            );
        } else {
            // If no slug is provided, reset the selected video
            this.selectedVideo = null;
        }
    }
}
