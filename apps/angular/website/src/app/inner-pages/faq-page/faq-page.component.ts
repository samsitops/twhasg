/**
 * FAQ Page Component
 * 
 * This standalone Angular component represents the FAQ page of the application.
 * 
 * Features:
 * - Displays a FAQ section with accordion-style question and answer toggling.
 * - Integrates common layout components such as header, navbar, banner, footer, and back-to-top button.
 * - Manages accordion state with openSectionIndex to track which FAQ item is expanded.
 * - Methods:
 *    - toggleSection(index): Toggles open/close state of the clicked FAQ item.
 *    - isSectionOpen(index): Checks if a specific FAQ item is currently open.
 * 
 * Usage:
 * - Use the <app-faq-page> selector to include this page in routing or other templates.
 * 
 * Dependencies:
 * - Uses Angular common directives: NgClass, NgIf.
 * - Imports other shared UI components.
 * 
 * Author: [Your Name]
 * Date: [Date]
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-faq-page',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './faq-page.component.html',
    styleUrl: './faq-page.component.scss'
})
export class FaqPageComponent {

    // Accordion
    openSectionIndex: number = 0;
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