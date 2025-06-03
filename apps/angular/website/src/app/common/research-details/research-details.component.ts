/**

|--------------------------------------------------------------------------
| Research Details Component
|--------------------------------------------------------------------------
@component
@selector app-research-details
Core Responsibilities
Manage the research details form and its submission.
Display confirmation messages upon successful submission.
Handle user interactions with the accordion sections.
@dependencies
Angular: Component, FormBuilder, FormGroup, Validators
ngx-bootstrap: BsDatepickerModule, BsModalService
EmailJS: For sending emails
@version
Last Updated: 2023-11-07
@maintenance
Update form fields and validation as needed.
Review email sending logic for any changes in requirements.
@contact
Owner: UI Team
Support: ui-team@dreamcare.com
GitHub: /DreamCare/ui-core/research
|-------------------------------------------------------------------------- */


import { Component } from '@angular/core';
import { InnerPageBannerComponent } from '../inner-page-banner/inner-page-banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgClass, NgIf } from '@angular/common';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { SendEmailService } from '../../shared/services/send-email.service';

@Component({
    selector: 'app-research-details',
    standalone: true,
    imports: [
        InnerPageBannerComponent,
        NavbarComponent,
        FooterComponent,
        BackToTopComponent,
        BsDatepickerModule,
        NgClass,
        ReactiveFormsModule,
        NgIf,
    ],
    templateUrl: './research-details.component.html',
    styleUrl: './research-details.component.scss',
    providers: [BsModalService],
})
export class ResearchDetailsComponent {
    researchDetailsForm: FormGroup = new FormGroup({});
    isLoading: boolean = false;
    bsModalRef: any;
    researchDetailsMessage: string = `<div class="message">
        <h1><span>✅</span> Thank You for Your Interest in Clinical Trials!</h1>
        <p>Your submission has been received! Our research team is reviewing your information, and we will contact you soon to discuss your eligibility and next steps.</p>
       
        <h2>What Happens Next?</h2>
        <p><span class="icon">📩</span><strong>Review & Pre-Screening</strong><br>
        Our research team will carefully review your information to determine if you may qualify for a current or upcoming clinical trial.</p>
       
        <p><span class="icon">📞</span><strong>Expect a Call or Email</strong><br>
        A member of our clinical trial coordination team will reach out within <strong>3–5 business days</strong> to discuss your health history and next steps in the enrollment process.</p>
       
        <p><span class="icon">📝</span><strong>Eligibility Screening</strong><br>
        If you meet the preliminary criteria, we will schedule a screening visit where you’ll receive more details about the study, potential benefits, and risks.</p>
       
        <div class="contact">
            <h2>Questions or Need More Information?</h2>
            <p>If you have any questions before we contact you, feel free to reach out:</p>
            <p>📞 <strong>Phone:</strong> <a href="tel:9192381110">919-238-1110</a></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:support@twhasg.com">support@twhasg.com</a></p>
        </div>
       
        <p>We appreciate your interest in advancing medical research!</p>
        <p><strong>TeamWork Health</strong></p>
    </div>`
    constructor(
        private fb: FormBuilder,
        private _toastr: ToastrService,
        private modalService: BsModalService,
        private _sendEmail: SendEmailService
    ) { }
    // Accordion
    openSectionIndex: number = 0;
    toggleSection(index: number): void {
        if (this.openSectionIndex === index) {
            this.openSectionIndex = -1;
        } else {
            this.openSectionIndex = index;
        }
    }
    isSectionOpen(index: number): boolean {
        return this.openSectionIndex === index;
    }

    ngOnInit(): void {
        this.researchDetailsForm = this.fb.group({
            fullName: ['', [Validators.required]],
            dateBirth: ['', [Validators.required]],
            phoneNumber: [
                '',
                [Validators.required, Validators.pattern(/^\d{10}$/)],
            ],
            email: ['', [Validators.required, Validators.email]],
            primaryHealth: ['', [Validators.required]],
            isReceivingTreatment: ['', [Validators.required]],
            symptoms: [''],
            consent: [false, Validators.requiredTrue],
        });
    }
    // from_name    message   form_title    from_email
    sendEmail() {
        this.isLoading = true;
        const emailParams = {
            // from_name: this.researchDetailsForm.value.fullName,
            to_email: 'mo@twhasg.com',
            form_title: `Clinical Trial `,
            message: `Hello, ${this.researchDetailsForm.value.message}\n
            My Name: ${this.researchDetailsForm.value.fullName}\n
            My Email is ${this.researchDetailsForm.value.email}\n
            My phoneNumber is ${this.researchDetailsForm.value.phoneNumber}\n.
            My Date Birth is ${this.researchDetailsForm.value.dateBirth}\n.
            My Primary Health is ${this.researchDetailsForm.value.primaryHealth}\n.
            My Receiving Treatment is ${this.researchDetailsForm.value.isReceivingTreatment}\n.
            My Symptoms is ${this.researchDetailsForm.value.symptoms}\n.
            My Consent is ${this.researchDetailsForm.value.consent}\n.
            `,
        };
        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.researchDetailsMessage);
                    this.researchDetailsForm.reset();
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
        //         // console.log(response);
        //         // this._toastr.success('Email sent successfully!', 'Success');
        //         this.researchDetailsForm.reset();
        //         this.isLoading = false;
        //         this.openMessageModal(this.researchDetailsMessage);

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
