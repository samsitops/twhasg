/**
 * VideoDetailsComponent
 * 
 * This standalone Angular component displays the details of a selected video.
 * It uses routing parameters to determine which video to show based on category and slug.
 * The component imports common layout components like Navbar, Footer, BackToTop,
 * and integrates ngx-bootstrap TabsModule for tabbed content display.
 * 
 * Main features:
 * - Retrieves video category and slug from route parameters.
 * - Finds and loads the matching video data from a predefined videos list.
 * - Displays video player and details dynamically.
 * 
 * Dependencies:
 * - ActivatedRoute: to access route parameters.
 * - StorageService: (injected, but not used in the current snippet; likely for future or extended functionality).
 * - videos: static list imported from shared constants.
 */
import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ActivatedRoute } from '@angular/router';
import { videos } from '../../shared/consts/videos';
import { StorageService } from '../../shared/services/storage.service';
import { NgIf } from '@angular/common';
@Component({
    selector: 'app-video-details',
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        BackToTopComponent,
        TabsModule,
        NgIf,
    ],
    templateUrl: './video-details.component.html',
    styleUrl: './video-details.component.scss',
})
export class VideoDetailsComponent {
    videos = videos; // Imported from your videos.ts file
    video: any = {} as any;
    videoUrl = '';
    constructor(
        private route: ActivatedRoute,
        private storageService: StorageService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            this.findVideosByCategory(params.category, params.slug);
        });
    }

    findVideosByCategory(category: string, slug: string): void {
        // Find the video that matches the slug
        const selectedCategory = this.videos.find(
            (video) => video.slug === category
        );
        this.findVideoBySlug(slug, selectedCategory);
    }

    findVideoBySlug(slug: string, category: any): void {
        // Find the video that matches the slug
        this.video = category.children?.find((v: any) => v.slug === slug);
    }
}
