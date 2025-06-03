/**
 * BANNER COMPONENT
 * ================
 * 
 * Purpose:
 * Displays a prominent hero banner section with:
 * - Main headline
 * - Supporting text
 * - Call-to-action buttons
 * - Decorative images
 * 
 * Features:
 * - Responsive design
 * - Animated elements
 * - Multiple CTA options
 * - RouterLink integration for navigation
 * 
 * Dependencies:
 * - Angular Router for navigation
 * - SCSS styles for layout and animations
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent { }