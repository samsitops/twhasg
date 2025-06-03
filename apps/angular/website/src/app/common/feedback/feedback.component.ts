/**
 * --------------------------------------------------------------------------
 * Feedback Component
 * --------------------------------------------------------------------------
 * 
 * Displays patient testimonials in an interactive carousel with:
 * - Auto-rotating testimonials
 * - Animated transitions
 * - Responsive design
 * 
 * @Component {
 *   selector: 'app-feedback',
 *   standalone: true,
 *   templateUrl: './feedback.component.html',
 *   styleUrls: ['./feedback.component.scss']
 * }
 * 
 * DATA STRUCTURE:
 * feedbacks: Array<{
 *   name: string;       // Patient name
 *   doctor: string;     // Treating physician
 *   title: string;      // Physician title/role
 *   testimonial: string; // Patient quote
 * }>
 * 
 * CAROUSEL CONFIGURATION:
 * • items: 1            // Single testimonial per slide
 * • loop: true          // Infinite looping
 * • autoplay: true      // Auto-rotation enabled
 * • smartSpeed: 1000    // Transition speed (ms)
 * • animateIn/Out:      // Fade animations
 * • mouseDrag: true     // Draggable on desktop
 * • touchDrag: true     // Draggable on mobile
 * 
 * DEPENDENCIES:
 * - ngx-owl-carousel-o: v8+ for carousel functionality
 * - @angular/router: Route detection
 * 
 * FEATURES:
 * • Responsive design (mobile-first)
 * • Accessible navigation
 * • Pause on hover
 * • Custom navigation icons
 * 
 * ACCESSIBILITY:
 * • Requires ARIA labels for carousel controls
 * • Needs focus management for keyboard users
 * • Ensure color contrast meets WCAG
 * 
 * MAINTENANCE NOTES:
 * • To add testimonials: Extend feedbacks array
 * • To modify timing: Adjust smartSpeed/autoplayTimeout
 * • Animation styles defined in component SCSS
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */


import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [RouterLink, CarouselModule, NgIf, NgClass, NgFor],
    templateUrl: './feedback.component.html',
    styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
    feedbacks = [
        {
            name: 'Christina S. Hod',
            doctor: 'Sonal Arora, MD',
            title: 'CEO & CMO',
            testimonial:
                "He takes time to listen to my concerns. 'For me he states Christina he truly cares about my health & me being healthy. Love the staff, if I send a message they get back with me at the end of day.' - Christina",
        },
        {
            name: 'Richard S. Ford',
            doctor: 'Sonal Arora, MD',
            title: 'CEO & CMO',
            testimonial:
                'Dr. Arora & his staff are very helpful. Great service. Anything that I need help regarding my health he took care of. - Richard',
        },
        {
            name: 'Barbara Osborne',
            doctor: 'Erin Welden',
            title: 'PA',
            testimonial:
                'I love Erin & the whole clinic staff. They are very professional and caring. I would not see no one but Erin. - Barbara',
        },
        {
            name: 'Rachel Johnson',
            doctor: 'Sonal Arora, MD',
            title: 'CEO & CMO',
            testimonial:
                "I love Dr. Arora, 'I was on Prednisone for 10 years because of lung disease. He was the only one that took me off it.' - Rachel",
        },
    ];

    constructor(public router: Router) { }

    // Owl Carousel
    feedbackSlides: OwlOptions = {
        items: 1,
        margin: 0,
        nav: false,
        loop: true,
        dots: true,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-simple-left'></i>",
            "<i class='icofont-simple-right'></i>",
        ],
    };
}
