/**
 * --------------------------------------------------------------------------
 * Message Component
 * --------------------------------------------------------------------------
 * 
 * Displays a prominent video message section with founder/CEO content
 * 
 * @Component {
 *   selector: 'app-message',
 *   standalone: true,
 *   templateUrl: './message.component.html',
 *   styleUrls: ['./message.component.scss']
 * }
 * 
 * STRUCTURE:
 * • Video Background: Full-width CEO message video
 * • Text Overlay: Semi-transparent dark overlay for readability
 * • Content Block: Heading, description and CTA button
 * 
 * FEATURES:
 * • Responsive video background
 * • Mobile-optimized layout (video below text on small screens)
 * • Accessibility-ready text contrast
 * • RouterLink integration for navigation
 * 
 * TECHNICAL SPECS:
 * • Uses Angular directives: NgStyle, NgClass, NgIf
 * • Bootstrap grid for responsive layout
 * • CSS positioning for overlay effects
 * • Mobile-first media queries
 * 
 * ACCESSIBILITY:
 * • Semantic HTML5 structure
 * • WCAG-compliant text contrast ratios
 * • Screen reader-friendly content flow
 * • Keyboard-navigable elements
 * 
 * DEPENDENCIES:
 * • Angular Router: For navigation links
 * • Bootstrap Utilities: For responsive grid
 * • Video file: /video/ceo_message.mp4
 * 
 * USAGE EXAMPLE:
 * <app-message></app-message>
 * 
 * MAINTENANCE:
 * • Video Updates: Replace ceo_message.mp4
 * • Styling: Modify SCSS variables
 * • Content: Edit template HTML
 * 
 * OPTIMIZATION TIPS:
 * 1. Add video captions track
 * 2. Implement lazy loading
 * 3. Add loading="lazy" attribute to video
 * 4. Use WebP fallback image for mobile
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */


import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-message',
    standalone: true,
    imports: [RouterLink, NgStyle, NgClass, NgIf],
    templateUrl: './message.component.html',
    styleUrl: './message.component.scss',
})
export class MessageComponent {
    constructor() { }
}
