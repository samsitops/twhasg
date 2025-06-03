/**
 * --------------------------------------------------------------------------
 * Funfacts Component
 * --------------------------------------------------------------------------
 * 
 * Displays animated statistics counters with route-specific styling variants
 * 
 * @Component {
 *   selector: 'app-funfacts',
 *   standalone: true,
 *   templateUrl: './funfacts.component.html',
 *   styleUrls: ['./funfacts.component.scss']
 * }
 * 
 * CORE FUNCTIONALITY:
 * • Displays 3 key statistics with animated counting:
 *   - Doctors & Nurses count
 *   - Happy Patients count
 *   - Years of Experience
 * • Supports multiple layout variants based on current route
 * 
 * TEMPLATE FEATURES:
 * • Background image with white card overlay
 * • Image-based icons (replaces font icons)
 * • Animated number counting via counter.js
 * • Responsive 3-column grid layout
 * 
 * ROUTE-DEPENDENT STYLING:
 * • Default: Standard layout with top margin
 * • /index-2: counter-area-two variant
 * • /index-3: counter-area-three variant
 * • /about: Removes top margin (mt-0)
 * 
 * DEPENDENCIES:
 * • Router: For route detection and conditional styling
 * • Counter animation library (e.g. counter.js)
 * 
 * ACCESSIBILITY:
 * • Requires proper ARIA attributes for animated content
 * • Needs focus management for interactive elements
 * • Images must have descriptive alt text
 * 
 * MAINTENANCE NOTES:
 * • Update statistics in template (currently hardcoded)
 * • Replace images in /img/about-us/ as needed
 * • Commented fourth counter available for expansion
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */


import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-funfacts',
    standalone: true,
    imports: [RouterLink, NgClass],
    templateUrl: './funfacts.component.html',
    styleUrl: './funfacts.component.scss',
})
export class FunfactsComponent {
    constructor(public router: Router) { }
}
