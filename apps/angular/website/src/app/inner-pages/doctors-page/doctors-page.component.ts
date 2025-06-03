/**
 * DoctorsPageComponent
 * 
 * This is a standalone Angular component responsible for displaying the doctors page.
 * It includes the top header, navigation bar, inner page banner, footer, and back-to-top button.
 * The component imports necessary UI components and Angular RouterLink directive to enable navigation.
 * 
 * Selector: 'app-doctors-page'
 * 
 * Template and styles are loaded from external files:
 * - Template URL: './doctors-page.component.html'
 * - Styles URL: './doctors-page.component.scss'
 * 
 * Usage:
 * <app-doctors-page></app-doctors-page>
 * 
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-doctors-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './doctors-page.component.html',
    styleUrl: './doctors-page.component.scss'
})
export class DoctorsPageComponent { }