/**
 * DepartmentsPageComponent
 * 
 * This is a standalone Angular component responsible for displaying
 * the Departments page of the application. 
 * 
 * It includes the common layout components such as the top header,
 * navigation bar, inner page banner, footer, and back-to-top button.
 * 
 * This component uses its own HTML template and SCSS styles.
 * 
 * Selector: 'app-departments-page'
 * 
 * Usage: <app-departments-page></app-departments-page>
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-departments-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './departments-page.component.html',
    styleUrl: './departments-page.component.scss'
})
export class DepartmentsPageComponent { }