/**
 * -----------------------------------------------------------------------------
 *  ABOUT-US.COMPONENT.TS — FEATURE SECTION COMPONENT
 * -----------------------------------------------------------------------------
 * 
 *  █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
 * ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
 * ███████║██████╔╝██║   ██║██║   ██║   ██║   
 * ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
 * ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
 * ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   
 * 
 * Reusable component for displaying featured content sections with:
 * - Title and description
 * - Media (image/video)
 * - Feature lists
 * - Call-to-action buttons
 * - Video popup capability
 * 
 * -----------------------------------------------------------------------------
 *  🏗️ COMPONENT ARCHITECTURE
 * -----------------------------------------------------------------------------
 * 
 *  🔘 STANDALONE: Yes
 *  🔘 SELECTOR: 'app-about-us'
 *  🔘 TEMPLATE: ./about-us.component.html
 *  🔘 STYLES: ./about-us.component.scss
 * 
 * -----------------------------------------------------------------------------
 *  📦 INPUTS
 * -----------------------------------------------------------------------------
 * 
 *  @Input() sectionData: SectionData
 *  • Structure:
 *    {
 *      title: string,
 *      description: string,
 *      image: string,    // URL/path to image
 *      video: string,    // URL/path to video
 *      order: number,    // Display ordering
 *      features: string[], // Bullet point features
 *      button: string,   // CTA text
 *      url: string       // Router destination
 *    }
 *  • Required: Yes
 *  • Default: Empty object (type cast)
 * 
 * -----------------------------------------------------------------------------
 *  🎛️ COMPONENT FEATURES
 * -----------------------------------------------------------------------------
 * 
 *  1. VIDEO POPUP SYSTEM
 *     • Toggleable modal display
 *     • Managed by isOpen state
 *     • Methods: openPopup(), closePopup()
 * 
 *  2. ROUTER INTEGRATION
 *     • Injectable Router for navigation
 *     • RouterLink directive for template navigation
 * 
 *  3. CONDITIONAL RENDERING
 *     • NgIf for optional content
 *     • NgClass for dynamic styling
 * 
 * -----------------------------------------------------------------------------
 *  🛠️ TECHNICAL IMPLEMENTATION NOTES
 * -----------------------------------------------------------------------------
 * 
 *  • Uses modern Angular standalone component architecture
 *  • Lightweight template with minimal logic
 *  • Type-safe with SectionData interface
 *  • Follows Angular best practices for:
 *    - Input properties
 *    - Dependency injection
 *    - Template directives
 * 
 * -----------------------------------------------------------------------------
 *  📝 USAGE EXAMPLE
 * -----------------------------------------------------------------------------
 * 
 *  <app-about-us [sectionData]="{
 *    title: 'Our Mission',
 *    description: 'Delivering excellence since 2020',
 *    image: 'assets/mission.jpg',
 *    video: 'assets/mission.mp4',
 *    features: ['24/7 Support', 'Quality Guarantee'],
 *    button: 'Learn More',
 *    url: '/about/mission'
 *  }"></app-about-us>
 * 
 * -----------------------------------------------------------------------------
 *  © 2025 DREAM CARE APPLICATIONS
 *  GitHub: @DreamCare | License: MIT
 * -----------------------------------------------------------------------------
 */

import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

/**
 * SECTION DATA INTERFACE
 * 
 * @description
 * Defines the structure for content passed to the component
 * 
 * @property title - Section header text
 * @property description - Paragraph content
 * @property image - Path to primary image asset
 * @property video - Path to video asset (optional)
 * @property order - Sorting index for multiple sections
 * @property features - Array of bullet point items
 * @property button - Call-to-action text
 * @property url - Router navigation path
 */
export interface SectionData {
    title: string;
    description: string;
    image: string;
    video: string;
    order: number;
    features: string[];
    button: string;
    url: string;
}

@Component({
    selector: 'app-about-us',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, CommonModule],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
    /**
     * CONTENT INPUT
     * 
     * @description
     * Primary data input for the component containing all
     * display content and configuration
     * 
     * @example
     * <app-about-us [sectionData]="myContent"></app-about-us>
     */
    @Input() sectionData: SectionData = {} as SectionData;

    constructor(public router: Router) { }

    /* VIDEO POPUP STATE MANAGEMENT */
    isOpen = false;

    /**
     * OPENS VIDEO MODAL
     * 
     * @description
     * Sets the popup state to visible
     * Typically bound to template click events
     */
    openPopup(): void {
        this.isOpen = true;
    }

    /**
     * CLOSES VIDEO MODAL
     * 
     * @description
     * Sets the popup state to hidden
     * Called by close button or backdrop click
     */
    closePopup(): void {
        this.isOpen = false;
    }
}