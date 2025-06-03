/**
 * @description
 * The RegisterPageComponent is a standalone Angular component responsible for rendering
 * the registration page layout. It includes several common UI components such as the top header,
 * navigation bar, inner banner, footer, and back-to-top button.
 *
 * This component primarily serves as a structural wrapper for the registration form,
 * which is defined in its associated HTML template.
 *
 * @selector app-register-page
 * @usage <app-register-page></app-register-page>
 *
 * @dependencies
 * - TopHeaderComponent: Displays the top contact bar.
 * - NavbarComponent: Main navigation bar.
 * - InnerPageBannerComponent: Banner with page title and background.
 * - FooterComponent: Page footer with links and contact info.
 * - BackToTopComponent: Scroll-to-top button.
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-register-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent { }