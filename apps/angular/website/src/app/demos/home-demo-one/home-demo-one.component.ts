/**
 * ----------------------------------------------------------------------------
 * @component HomeDemoOneComponent
 * ----------------------------------------------------------------------------
 *
 * @description
 * This is the main layout component for the homepage of the application.
 * It assembles and renders the entire landing structure using standalone
 * Angular components.
 *
 * @selector app-home-demo-one
 *
 * @imports
 * - TopHeaderComponent: Displays the contact & social header (optional)
 * - NavbarComponent: Navigation bar
 * - BannerComponent: Hero/banner section
 * - FunfactsComponent: Highlight stats or counters
 * - AboutUsComponent: Introduction and info section
 * - ServicesComponent: List of offered services
 * - ExpertiseComponent: Specialized medical fields
 * - DepartmentsComponent: Hospital departments overview
 * - DoctorsComponent: Featured doctors
 * - BlogComponent: Latest news/blog articles
 * - FooterComponent: Website footer
 * - BackToTopComponent: Scroll to top functionality
 *
 * @usage
 * Used in routing to show the main landing page (`home-demo-one.component.html`)
 * Make sure all imported components are properly configured as standalone.
 *
 * @style
 * Uses `home-demo-one.component.scss` for styling layout of homepage
 *
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 */


import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { ServicesComponent } from '../../common/services/services.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { DepartmentsComponent } from '../../common/departments/departments.component';
import { DoctorsComponent } from '../../common/doctors/doctors.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-one',
    standalone: true,
    imports: [TopHeaderComponent, NavbarComponent, BannerComponent, FunfactsComponent, AboutUsComponent, ServicesComponent, ExpertiseComponent, DepartmentsComponent, DoctorsComponent, BlogComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent { }