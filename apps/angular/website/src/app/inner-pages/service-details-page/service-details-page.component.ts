/**
 * ServiceDetailsPageComponent
 *
 * Description:
 * This standalone Angular component renders the details of a specific service based on route parameters.
 * It dynamically loads related services, service metadata (title, description, images), and associated videos.
 * It also handles signed video URL generation from cloud storage for secure playback.
 *
 * Features:
 * - Dynamic content loading via `ActivatedRoute` (category and slug)
 * - Fetches service data from local `services` constant
 * - Displays multiple content sections (headlines, images, descriptions)
 * - Loads videos from a cloud source using `StorageService`
 * - Filters and shows related services (excluding current)
 * - Fully modular with reusable components (e.g. Navbar, Blog, Footer, etc.)
 *
 * Dependencies:
 * - `StorageService`: Provides access to video files and signed URLs
 * - Route Parameters: Expects `category` and `slug`
 * - Component Imports: `NavbarComponent`, `BlogComponent`, `VideoPlayerComponent`, etc.
 *
 * Template: `service-details-page.component.html`
 * Styles: `service-details-page.component.scss`
 */


import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { services } from '../../shared/consts/services';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../../common/blog/blog.component';
import { StorageService } from '../../shared/services/storage.service';
import { VideoPlayerComponent } from '../../common/video-player/video-player.component';
@Component({
    selector: 'app-service-details-page',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        TopHeaderComponent,
        NavbarComponent,
        InnerPageBannerComponent,
        FooterComponent,
        BackToTopComponent,
        BlogComponent,
        VideoPlayerComponent,
    ],
    templateUrl: './service-details-page.component.html',
    styleUrl: './service-details-page.component.scss',
})
export class ServiceDetailsPageComponent {
    services = services as any;
    serviceDetails: any | null = null;
    relatedServices: any[] = [];
    category: string = '';

    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        this._ActivatedRoute.params.subscribe((params: any) => {
            const servicesCategory = this.services[params.category];
            this.category = params.category;
            this.relatedServices = servicesCategory.filter(
                (service: any) => service.slug !== params.slug
            );
            if (servicesCategory) {
                this.serviceDetails = servicesCategory.find(
                    (service: any) => service.slug === params.slug
                );
                if (params.slug.includes('-')) {
                    this.getAllVideos(params.slug.split('-').join(' '));
                } else {
                    this.getAllVideos(params.slug);
                }
            }
        });
    }

    getAllVideos(slug: string) {
        this.storageService.getVideos().then((videos) => {
            const videoFiles = videos.filter((video) =>
                video.name.toLowerCase().includes(slug.toLowerCase())
            );
            this.serviceDetails.videos = videoFiles;
            this.getSignedVideoUrls(videoFiles);
        });
    }

    getSignedVideoUrls(videoFiles: any[]) {
        videoFiles.forEach((video) => {
            this.storageService.getSignedVideoUrl(video.name).then((url) => {
                video.url = url;
                video.muted = true;
                video.playing = false;
            });
        });
    }
}
