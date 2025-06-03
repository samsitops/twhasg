/**
 * --------------------------------------------------------------------------
 * Departments Component
 * --------------------------------------------------------------------------
 * 
 * A tabbed interface showcasing medical departments/services with:
 * - Interactive carousel navigation
 * - Tabbed content panels
 * - Responsive design for all screen sizes
 * 
 * @Component
 * @selector app-departments
 * @standalone true
 * 
 * Features:
 * • Dynamic tab switching between departments
 * • Owl Carousel navigation controls
 * • Responsive layout (mobile to desktop)
 * • Accessible tab interface
 * 
 * Dependencies:
 * - Angular 17+ (standalone component)
 * - NGX Owl Carousel v10+
 * - Angular Router
 * 
 * Imports:
 * - RouterLink: For service detail navigation
 * - NgIf/NgClass: For conditional rendering
 * - CarouselModule: For department navigation
 * 
 * Methods:
 * - switchTab(): Handles tab changes
 * - openPopup()/closePopup(): Video modal controls
 * - onSlideChange(): Syncs carousel with tabs
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-departments',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, CarouselModule],
    templateUrl: './departments.component.html',
    styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
    // ======================
    // Component State
    // ======================

    /**
     * Currently active tab ID
     * @type string
     * @default 'tab1'
     */
    currentTab = 'tab1';

    /**
     * Video popup visibility state
     * @type boolean
     * @default false
     */
    isOpen = false;

    // ======================
    // Component Methods
    // ======================

    /**
     * Switches the active department tab
     * @param event MouseEvent - Click event
     * @param tab string - Target tab ID (tab1-tab5)
     */
    switchTab(event: MouseEvent, tab: string): void {
        event.preventDefault();
        this.currentTab = tab;
    }

    /**
     * Opens the video popup modal
     */
    openPopup(): void {
        this.isOpen = true;
    }

    /**
     * Closes the video popup modal
     */
    closePopup(): void {
        this.isOpen = false;
    }

    // ======================
    // Carousel Configuration
    // ======================

    /**
     * Owl Carousel configuration
     * @type OwlOptions
     */
    bannerSlides: OwlOptions = {
        items: 5,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-simple-left'></i>",
            "<i class='icofont-simple-right'></i>",
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    };

    /**
     * Handles carousel slide changes
     * @param event - Owl Carousel change event
     */
    onSlideChange(event: any): void {
        let currentIndex = event.startPosition;
        // Handle loop-around case
        if (currentIndex === 5) currentIndex = 0;

        const tab = `tab${currentIndex + 1}`;
        this.switchTab(new MouseEvent('click'), tab);
    }
}