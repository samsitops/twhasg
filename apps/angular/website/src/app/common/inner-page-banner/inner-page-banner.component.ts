/**
 * --------------------------------------------------------------------------
 * Inner Page Banner Component
 * --------------------------------------------------------------------------
 * 
 * Reusable banner component for inner pages with dynamic content and styling
 * 
 * @Component {
 *   selector: 'app-inner-page-banner',
 *   standalone: true,
 *   templateUrl: './inner-page-banner.component.html',
 *   styleUrls: ['./inner-page-banner.component.scss']
 * }
 * 
 * CORE FEATURES:
 * • Dynamic background images
 * • Route-specific layout variants
 * • Responsive breadcrumb navigation
 * • Configurable title width
 * 
 * INPUT PROPERTIES:
 * • pageTitle: string - Main heading text (required)
 * • pageSubTitle: string - Secondary description text
 * • backgroundImage: string - URL for banner background
 * • titleWidth: string - CSS class for title width control
 * 
 * TEMPLATE FUNCTIONALITY:
 * • Conditional display based on current route
 * • Multiple layout variants (page-title-one through five)
 * • Vertical centering with d-table utilities
 * • Responsive text sizing
 * 
 * DEPENDENCIES:
 * • Angular Router - For route detection
 * • Bootstrap Utilities - For responsive layout
 * 
 * STYLING VARIANTS:
 * 1. Default: Centered title/subtitle
 * 2. Doctors Page: With breadcrumb navigation
 * 3. Appointment Page: Taller layout with breadcrumbs
 * 4. Contact Page: Commented but available
 * 
 * ACCESSIBILITY:
 * • Semantic heading structure
 * • Needs ARIA labels for breadcrumbs
 * • Sufficient color contrast
 * 
 * USAGE EXAMPLE:
 * <app-inner-page-banner
 *   [pageTitle]="'Our Doctors'"
 *   [backgroundImage]="'assets/img/doctors-bg.jpg'"
 *   [titleWidth]="'w-50'">
 * </app-inner-page-banner>
 * 
 * MAINTENANCE:
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */

import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-inner-page-banner',
    standalone: true,
    imports: [RouterLink, NgStyle, NgClass, NgIf],
    templateUrl: './inner-page-banner.component.html',
    styleUrl: './inner-page-banner.component.scss',
})
export class InnerPageBannerComponent {
    constructor(public router: Router) { }

    @Input() pageTitle: string = '';
    @Input() pageSubTitle: string = '';
    @Input() backgroundImage: string = '';
    @Input() titleWidth: string = '';
}
