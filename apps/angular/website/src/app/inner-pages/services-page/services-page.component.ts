/**
 * ServicesPageComponent
 * 
 * This standalone Angular component represents the Services page of the application.
 * It includes common layout components such as the top header, navigation bar,
 * inner page banner, expertise section, footer, and back-to-top button.
 * 
 * The component imports necessary modules and components and connects to the
 * associated HTML and SCSS files for its template and styling.
 * 
 * No additional logic is implemented in this component as it mainly serves
 * as a container for the different reusable UI components on the Services page.
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, ExpertiseComponent, FooterComponent, BackToTopComponent],
    templateUrl: './services-page.component.html',
    styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent { }