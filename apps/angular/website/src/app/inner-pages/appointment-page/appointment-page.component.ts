/**
 * AppointmentPageComponent
 * 
 * This standalone Angular component represents the Appointment page of the application.
 * It includes common layout components such as the top header, navigation bar, 
 * an inner page banner, footer, and a back-to-top button.
 * 
 * The component uses Angular's RouterLink directive for navigation.
 * 
 * Imported components:
 * - TopHeaderComponent: Displays the top header section.
 * - NavbarComponent: The main navigation bar.
 * - InnerPageBannerComponent: Shows a banner with the page title and background image.
 * - FooterComponent: The page footer.
 * - BackToTopComponent: A button to scroll back to the top of the page.
 * 
 * This component’s template and styles are defined in external files.
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-appointment-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './appointment-page.component.html',
    styleUrl: './appointment-page.component.scss'
})
export class AppointmentPageComponent { }