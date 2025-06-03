/**
 * PRIVACY POLICY PAGE COMPONENT
 * ============================
 * 
 * Purpose:
 * Displays the privacy policy content and manages the page layout.
 * 
 * Features:
 * - Standalone component (Angular 15+)
 * - RouterLink integration for navigation
 * - Modular design with reusable layout components
 * - Responsive layout support
 * 
 * Structure:
 * 1. Top header section
 * 2. Main navigation
 * 3. Policy content with banner
 * 4. Footer section
 * 5. Back-to-top button
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-privacy-policy-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './privacy-policy-page.component.html',
    styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent { }