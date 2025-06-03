/**
 * --------------------------------------------------------------------------
 * Footer Component
 * --------------------------------------------------------------------------
 * 
 * Handles website footer with newsletter subscription and feedback forms
 * 
 * @Component {
 *   selector: 'app-footer',
 *   standalone: true,
 *   templateUrl: './footer.component.html',
 *   styleUrls: ['./footer.component.scss']
 * }
 * 
 * CORE FEATURES:
 * • Newsletter subscription form
 * • Feedback form (commented but available)
 * • Dynamic copyright year
 * • Service links from shared constants
 * • Success modals for form submissions
 * 
 * DATA STRUCTURES:
 * • services: Imported from shared/consts/services
 * • footerForm: FormGroup for feedback {
 *   - name: string (required)
 *   - phoneNumber: string (required, 10 digits)
 *   - message: string (required)
 * }
 * • newsLettersForm: FormGroup for newsletter {
 *   - email: string (required, valid email format)
 * }
 * 
 * FORM HANDLING:
 * • sendEmail(): Processes feedback form
 * • sendNewLettersEmail(): Processes newsletter subscription
 * • Both forms:
 *   - Validate inputs
 *   - Send via SendEmailService
 *   - Display success/error toasts
 *   - Show confirmation modal
 *   - Reset form on success
 * 
 * DEPENDENCIES:
 * • ngx-bootstrap/modal: For confirmation dialogs
 * • ngx-toastr: For user notifications
 * • SendEmailService: Handles email delivery
 * • Router: For navigation links
 * 
 * TEMPLATE BINDINGS:
 * • isNewsletter @Input(): Toggles newsletter visibility
 * • dateNow: Current year for copyright
 * • services: List of available services
 * • router.url: For conditional styling
 * 
 * ACCESSIBILITY:
 * • Form labels required
 * • Modal focus management needed
 * • Color contrast verified
 * 
 * MAINTENANCE NOTES:
 * • Email templates stored as component properties
 * • Form validation patterns can be modified
 * • Service links updated via shared/consts
 * 
 * © 2025 Teamwork Health
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */

import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { services } from '../../shared/consts/services';
import { SendEmailService } from '../../shared/services/send-email.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, ReactiveFormsModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    providers: [BsModalService],
})
export class FooterComponent {
    services = services;
    footerForm: FormGroup = new FormGroup({});
    newsLettersForm: FormGroup = new FormGroup({});
    dateNow = new Date().getFullYear();
    @Input() isNewsletter: boolean = false;
    bsModalRef: any;
    feedBackMessage: string = `<div class="message">
        <h1><span>✅</span> Thank You for Your Feedback!</h1>
        <p>We truly appreciate you taking the time to share your thoughts. Your feedback helps us improve and continue providing exceptional care and service.</p>
       
        <h2>What Happens Next?</h2>
        <p><span class="icon">📩</span><strong>We’ve Received Your Feedback</strong><br>
        Our team will review your input to enhance our patient experience, services, and overall care.</p>
       
        <p>Thank you for being a part of the TeamWork Health community. Your feedback helps us grow and serve you better!</p>
    </div>
`;
    newsLetterMessage: string = `<div class="message">
        <h1><span>✅</span> You're Now Subscribed to TeamWork Health Updates!</h1>
        <p>Thank you for signing up! You'll now receive the latest healthcare insights, expert tips, and updates on our services, clinical trials, and wellness programs—delivered straight to your inbox.</p>
       
        <h2>What You Can Expect:</h2>
        <p><span class="icon">📩</span><strong>Exclusive Health Insights</strong><br>
        Stay informed with expert articles on pulmonary health, sleep medicine, behavioral wellness, and preventive care.</p>
       
        <p><span class="icon">📰</span><strong>Latest News & Updates</strong><br>
        Be the first to hear about new services, research opportunities, and patient success stories.</p>
       
        <p><span class="icon">🗓</span><strong>Events & Webinars</strong><br>
        Gain access to educational webinars, community events, and Q&A sessions with our specialists.</p>
       
        <p>We’re excited to be part of your health journey—welcome to the TeamWork Health community!</p>
    </div>`;
    constructor(
        public router: Router,
        private fb: FormBuilder,
        private _toastr: ToastrService,
        private modalService: BsModalService,
        private _sendEmail: SendEmailService
    ) { }

    // constructor(private fb: FormBuilder, private _toastr: ToastrService) {}
    ngOnInit(): void {
        this.footerForm = this.fb.group({
            name: ['', [Validators.required]],
            phoneNumber: [
                '',
                [Validators.required, Validators.pattern(/^\d{10}$/)],
            ],
            message: ['', [Validators.required]],
        });
        this.newsLettersForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    sendEmail() {
        const emailParams = {
            from_name: this.footerForm.value.name,
            to_email: 'mo@twhasg.com',
            form_title: `Feedback `,
            message: `Phone number: ${this.footerForm.value.phoneNumber}\n
            Name: ${this.footerForm.value.name}\n
            Message: ${this.footerForm.value.message}\n
            `,
        };
        // this._toastr.success('Email sent successfully');
        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.feedBackMessage);
                    this.footerForm.reset();
                    this._toastr.success('Email sent successfully');
                    console.log('Email sent successfully');
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
        //         this.openMessageModal(this.feedBackMessage);
        //         this.footerForm.reset();
        //     })
        //     .catch((error) => {
        //         console.error('Error sending email:', error);
        //     });
    }

    sendNewLettersEmail() {
        const emailParams = {
            // from_name: this.footerForm.value.name,
            to_email: 'mo@twhasg.com',
            form_title: `Newsletter `,
            message: `Email: ${this.newsLettersForm.value.email}.
            `,
        };
        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.newsLetterMessage);
                    this.newsLettersForm.reset();
                    this._toastr.success('Email sent successfully');
                    console.log('Email sent successfully');
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
        //         this.openMessageModal(this.newsLetterMessage);
        //         this.newsLettersForm.reset();
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
