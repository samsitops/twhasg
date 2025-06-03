
/**
 * |--------------------------------------------------------------------------
 * | Navbar Component
 * |--------------------------------------------------------------------------
 * 
 * @component
 * @selector app-navbar
 * 
 * ### Core Responsibilities
 * 1. Responsive navigation system
 * 2. Service/video search functionality
 * 3. Sticky scroll behavior
 * 4. Mobile menu management
 * 
 * @dependencies
 * - Angular: RouterLink, NgClass, ReactiveFormsModule
 * - Child Components: SidebarComponent
 * - Data Sources: services, videos
 * 
 * @security
 * - [XSS Risk] Search input requires sanitization
 * - [Data Validation] External service data needs type checking
 * - [Memory] Scroll listener cleanup missing
 * 
 * @performance
 * - Scroll listener: Unthrottled (potential jank)
 * - Search filter: O(n) on keystroke (add debounce)
 * - Change detection: Default strategy (consider OnPush)
 * 
 * @accessibility
 * - Missing: ARIA roles for menu system
 * - Deficient: Keyboard navigation
 * - Warning: Contrast ratios unverified
 * - Pass: Semantic HTML foundation
 * 
 * @version
 * - Angular: 15+ (Standalone)
 * - TypeScript: 4.7+
 * - Style: SCSS Modules
 * - Last Updated: 2023-11-07
 * 
 * @maintenance
 * 1. Data Updates: Modify shared/consts files
 * 2. Styling: navbar.component.scss
 * 3. Behavior: Adjust scroll threshold (50px)
 * 
 * @contact
 * - Owner: Frontend Team
 * - Support: ui-support@dreamcare.com
 * - GitHub: /DreamCare/ui-core/navbar
 * |--------------------------------------------------------------------------
 */



import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { services } from '../../shared/consts/services';
import { videos } from '../../shared/consts/videos';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        NgClass,
        NgIf,
        NgFor,
        SidebarComponent,
        ReactiveFormsModule,
        FormsModule,
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    services = services;
    videos = videos;
    servicesList: any[] = [];
    searchText: string = '';

    ngOnInit() {
        this.servicesList = Object.values(services)
            .flat()
            .map((service) => ({ ...service }));
    }

    getFilteredServices() {
        if (!this.searchText) {
            return [];
        }

        return this.servicesList.filter((service) =>
            service.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
    }
    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition =
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    // Menu Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Search Trigger
    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    // Responsive Navbar Accordion
    openSectionIndex: number = -1;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }
}
