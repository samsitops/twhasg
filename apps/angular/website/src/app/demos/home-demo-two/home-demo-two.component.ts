/**
 * HOME PAGE COMPONENT (DEMO VERSION TWO)
 * =====================================
 * 
 * Purpose:
 * Serves as the primary landing page for a healthcare website, featuring:
 * - Hero banner with carousel
 * - Emergency information
 * - Service showcases
 * - Medical team display
 * - Patient interaction features
 * - Location information
 * 
 * Features:
 * - Standalone component architecture (Angular 16+)
 * - Modular content sections
 * - Dynamic about-us section configuration
 * - Responsive design
 * - Integrated booking system
 * - Google Maps integration for locations
 */


import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { EmergencyInformationComponent } from '../../common/emergency-information/emergency-information.component';
import {
    AboutUsComponent,
    SectionData,
} from '../../common/about-us/about-us.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { ServicesComponent } from '../../common/services/services.component';
import { DepartmentsComponent } from '../../common/departments/departments.component';
import { DoctorsComponent } from '../../common/doctors/doctors.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { BookAnAppointmentComponent } from '../../common/book-an-appointment/book-an-appointment.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { OurLocationsComponent } from "../../common/our-locations/our-locations.component";

@Component({
    selector: 'app-home-demo-two',
    standalone: true,
    imports: [
        TopHeaderComponent,
        NavbarComponent,
        BannerComponent,
        EmergencyInformationComponent,
        AboutUsComponent,
        ExpertiseComponent,
        ServicesComponent,
        DepartmentsComponent,
        DoctorsComponent,
        FunfactsComponent,
        BookAnAppointmentComponent,
        BlogComponent,
        FooterComponent,
        BackToTopComponent,
        OurLocationsComponent
    ],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss',
})
export class HomeDemoTwoComponent {
    aboutUs: SectionData = {
        title: 'Why Choose TeamWork Health?',
        description:
            'We understand that your health is personal. That’s why our specialists take the time to truly listen to your story, understand your concerns, and work together to create a care plan that fits your life. Your journey to better health starts here.',
        image: 'img/about-us/about-us.png',
        video: 'https://www.youtube.com/watch?v=7e90gBu4pas',
        order: 0,
        features: [
            'Comprehensive Care in One Place.',
            'Focused on Your Goals.',
            'Streamlined Diagnosis and Treatment, no delays.',
            'Compassionate Support Every Step of the Way.',
        ],
        button: 'Learn More',
        url: '/about',
    };
}
