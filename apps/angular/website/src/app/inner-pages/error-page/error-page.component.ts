/**
 * ErrorPageComponent
 *
 * This component represents the 404 Error Page shown when a user navigates to a route
 * that does not exist within the application.
 *
 * Features:
 * - Displays a user-friendly message indicating that the page was not found.
 * - Provides a link to return to the homepage.
 * - Includes common layout components: top header, navbar, footer, and back-to-top button.
 *
 * This component is standalone and imports necessary Angular router link directives
 * and shared components to build the page layout.
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-error-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './error-page.component.html',
    styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent { }