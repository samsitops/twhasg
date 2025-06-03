/**
 * TermsConditionsPageComponent
 *
 * This is a standalone Angular component representing the Terms & Conditions page.
 * It includes common layout components such as:
 * - Top header (commented out in template)
 * - Navbar
 * - Inner page banner with page title and background image
 * - Footer
 * - Back-to-top button
 *
 * The component uses Angular RouterLink for navigation.
 * Template and styles are linked via external files.
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-terms-conditions-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './terms-conditions-page.component.html',
    styleUrl: './terms-conditions-page.component.scss'
})
export class TermsConditionsPageComponent { }