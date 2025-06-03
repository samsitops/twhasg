/**
 * HOME PAGE COMPONENT (DEMO THREE)
 * ===============================
 * 
 * Purpose:
 * Serves as the main landing page composition component that orchestrates:
 * - Header/navigation
 * - Content sections
 * - Footer elements
 * 
 * Features:
 * - Standalone component architecture (Angular 15+)
 * - Modular design with reusable components
 * - Logical content flow from hero to footer
 * - Responsive layout support
 * 
 * Component Structure:
 * 1. Header Section (TopHeader, Navbar)
 * 2. Hero Banner (Banner)
 * 3. Content Sections (AboutUs, Expertise, Services, etc.)
 * 4. Footer Section (Footer, BackToTop)
 */

import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from '../../common/about-us/about-us.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { ServicesComponent } from '../../common/services/services.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { DepartmentsComponent } from '../../common/departments/departments.component';
import { DoctorsComponent } from '../../common/doctors/doctors.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-home-demo-three',
    standalone: true,
    imports: [TopHeaderComponent, NavbarComponent, BannerComponent, AboutUsComponent, ExpertiseComponent, ServicesComponent, WhyChooseUsComponent, DepartmentsComponent, DoctorsComponent, FunfactsComponent, FeedbackComponent, BlogComponent, FooterComponent, BackToTopComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent { }