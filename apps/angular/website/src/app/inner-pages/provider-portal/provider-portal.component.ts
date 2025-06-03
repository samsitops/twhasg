/**
 * ProviderPortalComponent
 * ----------------------
 * A standalone Angular component providing a provider partnership portal form.
 * 
 * Features:
 * - Displays a detailed form for providers to submit partnership interest and details.
 * - Uses reactive forms with validation for user input fields.
 * - Supports dynamic toggling of expanded content and "Other" checkbox logic.
 * - Sends form data via an injected SendEmailService to send partnership emails.
 * - Shows confirmation modal and toast notifications upon success or failure.
 * - Incorporates common layout components: Navbar, Footer, and Angular common directives.
 * 
 * Form Fields:
 * - Provider details: name, specialty, address, phone, email, website, full name, NPI, role.
 * - Partnership interests including value-based care, shared care collaboration, and other.
 * - Agreement checkbox for terms acceptance.
 * 
 * Dependencies:
 * - Angular Forms (ReactiveFormsModule, FormsModule)
 * - ngx-toastr for toast notifications
 * - ngx-bootstrap modal for modals
 * - Email sending via SendEmailService (wraps emailjs or other API)
 * 
 * Usage:
 * - Place <app-provider-portal> selector in the Angular template.
 * - Ensure providers like ToastrService, BsModalService, and SendEmailService are configured in app module or component.
 * 
 * Accessibility:
 * - Uses standard Angular reactive forms with validation messages (not shown here).
 * - Modal and toast notifications provide user feedback.
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 */


import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../../common/footer/footer.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { RouterModule } from '@angular/router';
// import * as emailjs from '@emailjs/browser';
import emailjs from '@emailjs/browser';

import {
    FormArray,
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../common/modal/modal.component';
import { SendEmailService } from '../../shared/services/send-email.service';
@Component({
    selector: 'app-provider-portal',
    standalone: true,
    imports: [
        NavbarComponent,
        FooterComponent,
        NgFor,
        RouterModule,
        NgIf,
        ReactiveFormsModule,
        FormsModule,
    ],
    templateUrl: './provider-portal.component.html',
    styleUrl: './provider-portal.component.scss',
    providers: [BsModalService],
})
export class ProviderPortalComponent {
    providerPortal: FormGroup = new FormGroup({});
    isLoading: boolean = false;
    bsModalRef: any;
    providerPortalMessage: string = `<div class="message">
        <h1>✅ Thank You for Your Interest in Partnering with TeamWork Health!</h1>
        <p>We appreciate your interest in collaborating with us to improve patient care. Our team is reviewing your submission and will reach out within <strong>3–5 business days</strong> to discuss the next steps.</p>
       
        <h2>What Happens Next?</h2>
        <p><span class="icon">📩</span><strong>Review Process</strong><br>
        Our team will review your submission to understand your practice and partnership goals.</p>
       
        <p><span class="icon">📞</span><strong>Personalized Outreach</strong><br>
        A TeamWork Health representative will contact you to schedule a discussion and explore how we can work together.</p>
       
        <p><span class="icon">🤝</span><strong>Collaboration Planning</strong><br>
        We’ll discuss opportunities to integrate your practice into our Value-Based Enterprise, Divisional Model, or Shared Care Coordination.</p>
       
        <div class="contact">
            <h2>Need Immediate Assistance?</h2>
            <p>If you have any urgent questions or would like to speak with someone sooner, please contact us at:</p>
            <p>📞 <strong>Phone:</strong> <a href="tel:9192381110">919-238-1110</a></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:partnerships@twhasg.com">partnerships@twhasg.com</a></p>
        </div>
       
        <p>We look forward to working with you to deliver seamless, patient-centered care!</p>
        <p><strong>TeamWork Health</strong></p>
    </div>`;
    constructor(
        private fb: FormBuilder,
        private _toastr: ToastrService,
        private modalService: BsModalService,
        private _sendEmail: SendEmailService
    ) { }

    aboutUsServices = [
        {
            title: 'Physician Led Super group',
            img: 'img/about-1.png',
            full: `At the core of our model is the belief that healthcare decisions should be guided by those who know patients best—physicians. We are building a physician-led super group that grants doctors the autonomy to design personalized care journeys tailored to their patient's needs. By putting physicians in the driver’s seat, we ensure that every aspect of care is patient-focused and collaborative.`,
            truncated: `At the core of our model is the belief that healthcare decisions should be guided by those who know patients best—physicians.`,
        },
        {
            img: 'img/about-2.webp',
            title: 'Intake Process Powered by AI',
            full: `Our engineering team designed and are developing an innovative AI-powered intake process to automate and accelerate the way patient's data is being collected and understood. By capturing patient's history, conditions, and needs in seconds, we create a seamless healthcare journey with an advanced data aggregation to build a complete view for patient's history before the visit.`,
            truncated: `Our engineering team designed and are developing an innovative AI-powered intake process....`,
        },
        {
            img: 'img/about-3.webp',
            title: 'Value Based Care',
            full: `Our integrated care model merging fee-for-service with value-based care (VBC), to optimize patient outcomes, reduce wait time, and improve practice efficiency. Our VBC programs monitor and track patient's progress, ensuring adherence to care plans and medications to prevent complications. VBC ensures patients receive comprehensive, coordinated and quality health care .`,
            truncated: `Our integrated care model merging fee-for-service with value-based care (VBC), to optimize patient outcomes, reduce wait time, and...`,
        },
        {
            img: 'img/about-4.webp',
            title: 'Better Care at Lower Costs',
            full: `By aligning care delivery with value-based principles and leveraging technology, we reduce healthcare costs for patients, providers, and payers. Our model focuses on Leveraging physicians and their extenders, early intervention, coordinated care, and efficiency to prevent costly complications, unnecessary treatments, visits and Improved payer contracts through unified, physician-led groups`,
            truncated: `By aligning care delivery with value-based principles and leveraging technology, we reduce healthcare costs for patients, providers, and....`,
        },
    ];

    isOtherSelected = false;
    isExpanded: boolean[] = [false, false, false, false];

    toggleContent(index: number) {
        this.isExpanded[index] = !this.isExpanded[index];
    }

    toggleOther(event: any) {
        this.isOtherSelected = event.target.checked;
    }
    ngOnInit(): void {
        this.providerPortal = this.fb.group({
            name: [
                '',
                [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)],
            ],
            specialty: ['', [Validators.required]],
            address: ['', [Validators.required]],
            website: [''],
            phoneNumber: [
                '',
                [Validators.required, Validators.pattern(/^\d{10}$/)],
            ],
            email: ['', [Validators.required, Validators.email]],
            fullName: [
                '',
                [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)],
            ],
            npiNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            role: [
                '',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(50),
                ],
            ],
            joinValueBased: [],
            collaborateSharedCare: [],
            joinTeamWork: [],
            clinicalResearch: [],
            other: [],
            otherText: [''],
            description: [''],
            agreement: [false, Validators.requiredTrue],
        });
    }
    // from_name    message   form_title    from_email

    onCheckboxChange(e: any, formControlName: string, value: string) {
        if (e.target.checked) {
            this.providerPortal.get(formControlName)?.setValue(value);
        } else {
            this.providerPortal.get(formControlName)?.setValue('');
        }
        if (formControlName === 'other') {
            this.isOtherSelected = e.target.checked;
        }
        console.log(this.providerPortal.value);
    }

    sendEmail() {
        this.isLoading = true;
        const emailParams = {
            to_email: this.providerPortal.value.name,
            from_name: this.providerPortal.value.name,
            // from_email: this.providerPortal.value.email,
            form_title: `Partnerships`,
            message: `Hello, ${this.providerPortal.value.description}\n
            My name is: ${this.providerPortal.value.name}\n
            My phone number is: ${this.providerPortal.value.phoneNumber}\n
            My email is: ${this.providerPortal.value.email}\n
            My specialty is: ${this.providerPortal.value.specialty}\n
            My address is: ${this.providerPortal.value.address}\n
            ${this.providerPortal.value.website
                    ? `My website is: ${this.providerPortal.value.website}\n`
                    : ''
                }
            My fullName is: ${this.providerPortal.value.fullName}\n
            My NPI is: ${this.providerPortal.value.npiNumber}\n
            My Role/Position is: ${this.providerPortal.value.role}\n
            My Partnership Interest is: ${this.providerPortal.value.joinValueBased || ''
                }\n
             ${this.providerPortal.value.collaborateSharedCare || ''}\n
             ${this.providerPortal.value.joinTeamWork || ''},\n
             ${this.providerPortal.value.clinicalResearch || ''},\n
             ${this.providerPortal.value.other || ''},\n
            ${this.providerPortal.value.otherText
                    ? `My Other Interest Text is: ${this.providerPortal.value.otherText},\n`
                    : ''
                }
            My Description is: ${this.providerPortal.value.description}\n
            `,
        };
        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.providerPortalMessage);
                    this.providerPortal.reset();
                    this._toastr.success('Email sent successfully');
                    console.log("Email sent successfully");

                },
                error: (error) => {
                    console.error('Error sending email:', error);
                    this._toastr.error('Failed to send email');
                },
            });
        // emailjs
        //     .send(
        //         'service_rscszog',
        //         'template_gv12ncq',
        //         emailParams,
        //         '0_4mN3Gyr41_yiTIN'
        //     )
        //     .then((response) => {
        //         this.openMessageModal(this.providerPortalMessage);
        //         this.providerPortal.reset();
        //         this.isLoading = false;
        //     })
        //     .catch((error) => {
        //         console.error('Error sending email:', error);
        //     });
    }
    openMessageModal(message: string) {
        this.bsModalRef = this.modalService.show(ModalComponent, {
            initialState: {
                message: message,
            },
            backdrop: 'static',
        });
    }
}
