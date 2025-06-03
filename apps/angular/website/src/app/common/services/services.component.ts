/**
 * --------------------------------------------------------------------------
 * Services Component
 * --------------------------------------------------------------------------
 * 
 * Displays pulmonary care services in an interactive grid with:
 * - Mobile-optimized expandable cards
 * - Desktop hover effects
 * - Detailed service routing
 * 
 * @Component {
 *   selector: 'app-services',
 *   standalone: true,
 *   templateUrl: './services.component.html',
 *   styleUrls: ['./services.component.scss']
 * }
 * 
 * FEATURES:
 * • 12 specialized pulmonary services
 * • Responsive behavior (mobile/desktop)
 * • Dynamic active state management
 * • Click-outside detection
 * 
 * DATA STRUCTURE:
 * services: Array<{
 *   title: string;
 *   description: string;
 *   link: string;
 *   imageUrl: string;
 * }>
 * 
 * MOBILE INTERACTIONS:
 * • handleClick(): Toggles card expansion
 * • onClickOutside(): Collapses open cards
 * 
 * DEPENDENCIES:
 * - @angular/router: For service navigation
 * - ChangeDetectorRef: For manual UI updates
 * 
 * IMPORTS:
 * - RouterLink: Service detail navigation
 * - NgIf/NgClass: Conditional rendering
 * - NgFor: Service iteration
 * 
 * RESPONSIVE LOGIC:
 * • <992px: Click-to-expand cards
 * • ≥992px: Hover interactions
 * 
 * ACCESSIBILITY:
 * • Semantic HTML structure
 * • Focusable service cards
 * • ARIA attributes (implement in template)
 * 
 * MAINTENANCE:
 * © 2025 Dream Care
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */

import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [RouterLink, NgIf, NgClass, NgFor],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss',
})
export class ServicesComponent {
    activeIndex: number | null = null; // Tracks the currently active item
    services = [
        {
            title: 'Asthma',
            description:
                'Personalized care plans to help you manage symptoms and improve your quality of life.',
            link: '/service-details/pulmonaryCareServices/asthma',
            imageUrl: 'img/services/Asthma.png',
        },
        {
            title: 'COPD',
            description:
                'Tailored treatment strategies to ease breathing difficulties and enhance lung function.',
            link: '/service-details/pulmonaryCareServices/copd',
            imageUrl: 'img/services/COPD.png',
        },
        {
            title: 'Pneumonia',
            description:
                'Accurate diagnosis and timely treatment to address lung infections and prevent complications.',
            link: '/service-details/pulmonaryCareServices/pneumonia',
            imageUrl: 'img/services/Pneumonia.png',
        },
        {
            title: 'Pulmonary Fibrosis',
            description:
                'Specialized care to manage scarring of lung tissue and maintain respiratory health.',
            link: '/service-details/pulmonaryCareServices/pulmonary-fibrosis',
            imageUrl: 'img/services/Pulmonary-Fibrosis.png',
        },
        {
            title: 'Sleep Apnea',
            description:
                'Comprehensive evaluations and therapies to improve sleep quality and overall well-being.',
            link: '/service-details/pulmonaryCareServices/sleep-apnea',
            imageUrl: 'img/services/Sleep-Apnea.png',
        },
        {
            title: 'Other Lung Problems',
            description:
                'Breathing problems can stem from a variety of lung conditions and a wide range of respiratory issues.',
            link: '/service-details/pulmonaryCareServices/lung-problem',
            imageUrl: 'img/services/Interstitial-Lung-Disease.png',
        },
        {
            title: 'Lung Cancer',
            description:
                'Collaborative care plans focusing on early detection, advanced treatments, and patient support.',
            link: '/service-details/pulmonaryCareServices/lung-cancer',
            imageUrl: 'img/services/Lung-Cancer.png',
        },
        {
            title: 'Chronic Cough',
            description:
                'Chronic cough is more than just a nuisance, it can signal an underlying health condition that needs to be addressed.',
            link: '/service-details/pulmonaryCareServices/chronic-cough',
            imageUrl: 'img/services/Chronic-Bronchitis.png',
        },
        {
            title: 'Tuberculosis (TB)',
            description:
                'Comprehensive diagnostics and treatment for this serious infectious disease.',
            link: '/service-details/pulmonaryCareServices/tuberculosis',
            imageUrl: 'img/services/Tuberculosis.png',
        },
        {
            title: 'Pulmonary Hypertension',
            description:
                'Advanced therapies to manage high blood pressure in the lungs and improve quality of life.',
            link: '/service-details/pulmonaryCareServices/pulmonary-hypertension',
            imageUrl: 'img/services/Pulmonary-Hypertension.png',
        },
        {
            title: 'COVID-19 Complications',
            description:
                'Specialized follow-up care to address lingering respiratory issues caused by COVID-19.',
            link: '/service-details/pulmonaryCareServices/covid-19',
            imageUrl: 'img/services/COVID.png',
        },
        {
            title: 'Oxygen Therapy',
            description:
                'Custom oxygen therapy solutions to support breathing and improve energy levels',
            link: '/service-details/pulmonaryCareServices/O2Hypoxemia',
            imageUrl: 'img/services/Oxygen-Therapy.png',
        },
    ];

    constructor(public router: Router, private cdr: ChangeDetectorRef) { }

    // Handle click inside a service-item
    handleClick(index: number, event: Event) {
        if (window.innerWidth < 992) {
            event.stopPropagation(); // Prevent the click from bubbling up to the document
            this.activeIndex = this.activeIndex === index ? null : index; // Toggle active state
            this.cdr.detectChanges(); // Force change detection
        }
    }

    // Listen for clicks outside any service-item
    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (window.innerWidth < 992) {
            const clickedElement = event.target as HTMLElement;
            const isInsideServiceItem = clickedElement.closest('.service-item');
            if (!isInsideServiceItem) {
                this.activeIndex = null; // Remove active state if clicked outside
            }
            this.cdr.detectChanges(); // Force change detection
        }
    }
}
