/**
 * --------------------------------------------------------------------------
 * Doctors Component
 * --------------------------------------------------------------------------
 * 
 * Displays medical team members in a responsive carousel with:
 * - Automatic sliding animation
 * - Responsive team member cards
 * - Multiple breakpoint configurations
 * 
 * @Component
 * @selector app-doctors
 * @standalone true
 * 
 * Features:
 * • 22 team member profiles with photos
 * • Auto-playing carousel with hover pause
 * • Responsive display (1-4 columns)
 * • Smooth transition animations
 * 
 * Dependencies:
 * - Angular 17+ (standalone component)
 * - NGX Owl Carousel v10+
 * - Angular Router
 * 
 * Imports:
 * - RouterLink: For navigation
 * - NgIf/NgClass/NgFor: Directives
 * - CarouselModule: Owl Carousel
 * 
 * Data Structure:
 * teams: Array<{
 *   name: string;
 *   title: string;
 *   image: string;
 *   description: string;
 * }>
 * 
 * Carousel Configuration:
 * - 4 items desktop, scales down to 1 mobile
 * - 1.5s auto-play interval
 * - 30px margin between items
 * - Smooth 1000ms transitions
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-doctors',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, NgFor, CarouselModule],
    templateUrl: './doctors.component.html',
    styleUrl: './doctors.component.scss',
})
export class DoctorsComponent {
    /**
     * Team member data array
     * @type Array<{name: string, title: string, image: string, description: string}>
     */
    teams = [
        {
            name: 'Sonal Arora, MD',
            title: 'CEO & CMO',
            image: 'img/doctor/1.jpg',
            description: '',
        },
        // ... (remaining team members)
    ];

    constructor(public router: Router) { }

    /**
     * Owl Carousel configuration
     * @type OwlOptions
     */
    bannerSlides: OwlOptions = {
        items: 4,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000, // Transition speed
        autoplaySpeed: 1500, // Slide display duration
        autoplayHoverPause: true,
        margin: 30, // Item spacing
        navText: [
            "<i class='icofont-simple-left'></i>",
            "<i class='icofont-simple-right'></i>",
        ],
        responsive: {
            0: { items: 1 },   // Mobile
            576: { items: 2 }, // Large mobile
            768: { items: 3 }, // Tablet
            992: { items: 4 }, // Desktop
            1200: { items: 4 } // Large desktop
        }
    };
}