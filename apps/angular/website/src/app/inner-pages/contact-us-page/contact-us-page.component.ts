/**
 * Sends the contact form email using SendEmailService.
 * 
 * Collects user input from the contact form, constructs an email message,
 * and sends it to the designated recipient email address.
 * 
 * On successful send:
 * - Shows a confirmation modal with a thank you message.
 * - Resets the form fields.
 * - Displays a success toast notification.
 * 
 * On error:
 * - Logs the error to the console.
 * - Displays an error toast notification.
 */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { NgIf } from '@angular/common';
import emailjs from '@emailjs/browser';

import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlogComponent } from '../../common/blog/blog.component';
import { OurLocationsComponent } from '../../common/our-locations/our-locations.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../common/modal/modal.component';
import { SendEmailService } from '../../shared/services/send-email.service';

@Component({
    selector: 'app-contact-us-page',
    standalone: true,
    imports: [
        RouterLink,
        TopHeaderComponent,
        NavbarComponent,
        InnerPageBannerComponent,
        FooterComponent,
        BackToTopComponent,
        NgIf,
        ReactiveFormsModule,
        BlogComponent,
        OurLocationsComponent,
    ],
    templateUrl: './contact-us-page.component.html',
    styleUrl: './contact-us-page.component.scss',
    providers: [BsModalService],
})
export class ContactUsPageComponent {
    bsModalRef: any;
    contactUsMessage: string = `<div class="message">
        <h1>✅ Thank You for Reaching Out to TeamWork Health!</h1>
        <p>We have received your inquiry and will get back to you as soon as possible. Our team is dedicated to providing you with the support and information you need.</p>
       
        <h2>What Happens Next?</h2>
        <p><span class="icon">📩</span><strong>Review & Response</strong><br>
        Our team is reviewing your message and will direct it to the appropriate department.</p>
       
        <p><span class="icon">📞</span><strong>Expect a Reply Soon</strong><br>
        We strive to respond to all inquiries within <strong>1–2 business days</strong>. If your request is urgent, please call us directly.</p>
       
        <p><span class="icon">🤝</span><strong>How We Can Help</strong></p>
        <ul>
            <li>Appointment Scheduling & Changes</li>
            <li>Questions About Our Services</li>
            <li>Referral & Partnership Inquiries</li>
            <li>Billing & Insurance Questions</li>
        </ul>
       
        <div class="contact">
            <h2>Need Immediate Assistance?</h2>
            <p>If your inquiry requires urgent attention, please contact us directly:</p>
            <p>📞 <strong>Phone:</strong> <a href="tel:9192381110">919-238-1110</a></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:support@twhasg.com">support@twhasg.com</a></p>
        </div>
       
        <p>We appreciate your interest in TeamWork Health and look forward to assisting you!</p>
        <p><strong>TeamWork Health</strong></p>
    </div>`;
    contractForm: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder,
        private _toastr: ToastrService,
        private modalService: BsModalService,
        private _sendEmail: SendEmailService
    ) { }
    ngOnInit(): void {
        this.contractForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: [
                '',
                [Validators.required, Validators.pattern(/^\d{10}$/)],
            ],
            subject: ['', [Validators.required]],
            message: [''],
        });
    }
    // from_name    message   form_title    from_email
    sendEmail() {
        const emailParams = {
            from_name: this.contractForm.value.name,
            to_email: 'mo@twhasg.com',
            form_title: `Contact Us `,
            message: `Hello, ${this.contractForm.value.message}\n
            My phoneNumber is ${this.contractForm.value.phoneNumber}\n.
            My Email is ${this.contractForm.value.email}
            My subject is ${this.contractForm.value.subject}\n.
            `,
        };

        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.contactUsMessage);
                    this.contractForm.reset();
                    this._toastr.success('Email sent successfully');

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
        //         console.log(response);
        //         // this._toastr.success('Email sent successfully!', 'Success');
        //         this.contractForm.reset();
        //         this.openMessageModal(this.contactUsMessage);

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
