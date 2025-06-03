/**
 * --------------------------------------------------------------------------
 * Library Sidebar Component
 * --------------------------------------------------------------------------
 * 
 * Displays a navigable sidebar for video library content with active route highlighting
 * 
 * @Component {
 *   selector: 'app-library-sidebar',
 *   standalone: true,
 *   templateUrl: './library-sidebar.component.html',
 *   styleUrls: ['./library-sidebar.component.scss']
 * }
 * 
 * CORE FEATURES:
 * • Dynamic video list from shared constants
 * • Active route highlighting
 * • Responsive navigation links
 * 
 * DATA FLOW:
 * • videos: Array<{
 *     title: string;
 *     slug: string;
 *     [additional properties...]
 *   }> - Imported from shared/consts/videos
 * • activeLink: string - Tracked via @Input()
 * 
 * TEMPLATE FUNCTIONALITY:
 * • Generates routerLinks for each video
 * • Applies 'active' class to current route
 * • Clean hover/focus states
 * 
 * DEPENDENCIES:
 * • RouterModule: For routerLink functionality
 * • CommonModule: For Angular core directives
 * 
 * USAGE EXAMPLE:
 * <app-library-sidebar [activeLink]="currentVideoSlug"></app-library-sidebar>
 * 
 * STYLING:
 * • Active link: Blue text with bottom border
 * • Hover state: Matches active styling
 * • Full viewport height by default
 * 
 * ACCESSIBILITY:
 * • Semantic list structure
 * • Keyboard-navigable links
 * • Requires focus visible states
 * 
 * MAINTENANCE:
 * • To update videos: Modify shared/consts/videos.ts
 * • To change styles: Update SCSS variables
 * • Future: Add search/filter functionality
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */


import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { videos } from '../../shared/consts/videos';

@Component({
    selector: 'app-library-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './library-sidebar.component.html',
    styleUrl: './library-sidebar.component.scss',
})
export class LibrarySidebarComponent {
    videos = videos;
    @Input() activeLink: any;

    ngOnInit(): void { }
}
