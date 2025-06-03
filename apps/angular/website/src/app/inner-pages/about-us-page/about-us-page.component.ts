/**
 * @component AboutUsPageComponent
 * @description
 * This is the main component for rendering the "About Us" page.
 * It includes a structured layout of reusable, standalone UI components 
 * and passes dynamic data to the <app-about-us> sections.
 *
 * @structure
 * The layout includes:
 * - Navbar and inner page banner
 * - Multiple <app-about-us> sections rendered via *ngFor from the `sections` array
 * - Supplementary components: Funfacts, Message, Feedback, Blog, Footer
 *
 * @data
 * - `sections`: Array of `SectionData` containing information about mission, patient care, and approach.
 *    Each section includes:
 *    - `title`: Section heading
 *    - `description`: Text content
 *    - `image`: Section image path
 *    - `video`: Embedded video URL
 *    - `features`: Bullet points list
 *    - `button`: CTA text
 *    - `url`: CTA target route
 *    - `order`: Display order preference
 *
 * @notes
 * - Component is fully standalone and uses Angular’s modern standalone API
 * - Some common sections (expertise/services) are optionally commented in the template
 */


import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import {
    AboutUsComponent,
    SectionData,
} from '../../common/about-us/about-us.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { ExpertiseComponent } from '../../common/expertise/expertise.component';
import { ServicesComponent } from '../../common/services/services.component';
import { FeedbackComponent } from '../../common/feedback/feedback.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../../common/message/message.component';

@Component({
    selector: 'app-about-us-page',
    standalone: true,
    imports: [
        TopHeaderComponent,
        NavbarComponent,
        InnerPageBannerComponent,
        AboutUsComponent,
        FunfactsComponent,
        ExpertiseComponent,
        ServicesComponent,
        FeedbackComponent,
        BlogComponent,
        FooterComponent,
        BackToTopComponent,
        WhyChooseUsComponent,
        CommonModule,
        MessageComponent,
    ],
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.scss',
})
export class AboutUsPageComponent {
    sections: SectionData[] = [
        {
            title: 'Our Mission',
            description:
                'Our mission is simple yet profound: to create a healthcare experience that revolves around you.',
            image: 'img/about-us/our-mission.jpg',
            video: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            order: 0,
            features: [
                'Delivering better outcomes by creating patient-centered workflows.',
                'Reduce wait times, so you can see specialists when you need them.',
                'Lower healthcare costs without compromising quality.',
                'Eliminate the anxiety of navigating fragmented care systems.',
                'Focus on creating a seamless, personalized care journey built around your unique needs.',
            ],
            button: 'Contact Us',
            url: '/contact',
        },
        {
            title: 'Patient-Centric Care',
            description:
                'We understand that every patient has a unique story, and we’re here to listen. Our team of specialists works together to design care plans tailored to your needs, ensuring:',
            image: 'img/about-us/patient-centeric.jpg',
            video: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            order: 1,
            features: [
                'Holistic, coordinated care across specialties.',
                'A focus on reducing hospital readmissions and improving outcomes.',
                'Clear communication to ease your concerns and guide your journey.',
            ],
            button: 'Contact us',
            url: '/contact',
            // button: 'Request Appointment',
            // url: '/request-appointment',
        },
        {
            title: 'Our Approach',
            description:
                'Our innovative approach combines cutting-edge technology with compassionate care:',
            image: 'img/about-us/our-approach.jpg',
            video: 'https://www.youtube.com/watch?v=7e90gBu4pas',
            order: 0,
            features: [
                'Integrated Technology: We use advanced tools to streamline the intake process, saving you time and money.',
                'Teamwork at Its Core: Our specialists collaborate to provide unified care, eliminating the silos that lead to delays and frustrations.',
                'Value-Based Care: By focusing on patient outcomes, we create a healthier, happier future for our communities..',
            ],
            button: 'Contact us',
            url: '/contact',
        },
    ];
    constructor() { }
}
