/**
 * DoctorDetailsPageComponent
 *
 * This standalone Angular component represents the Doctor Details page.
 * It includes common layout components such as the top header, navigation bar,
 * footer, and a back-to-top button.
 *
 * Imported Components:
 * - TopHeaderComponent: The top header section of the page.
 * - NavbarComponent: The main navigation bar.
 * - FooterComponent: The footer section.
 * - BackToTopComponent: Button to scroll back to the top of the page.
 * 
 * Also imports Angular's RouterLink directive for navigation purposes.
 *
 * Template and styles are linked via external HTML and SCSS files.
 */

import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-doctor-details-page',
    standalone: true,
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, FooterComponent, BackToTopComponent],
    templateUrl: './doctor-details-page.component.html',
    styleUrl: './doctor-details-page.component.scss'
})
export class DoctorDetailsPageComponent { }