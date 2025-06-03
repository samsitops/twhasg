/**
 * LOGIN PAGE COMPONENT
 * ===================
 * 
 * Purpose:
 * Handles the login page layout and functionality including:
 * - User authentication form
 * - Navigation to registration
 * - Password recovery options
 * 
 * Features:
 * - Standalone component (Angular 15+)
 * - RouterLink integration for navigation
 * - Modular design with reusable components
 * - Responsive layout support
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, InnerPageBannerComponent, FooterComponent, BackToTopComponent],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent { }