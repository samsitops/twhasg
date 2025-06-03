/**
 * FormComponent is responsible for handling the appointment request form.
 * 
 * It manages multiple form groups to collect user details, care provider info,
 * and family member info. It validates input fields, handles submission,
 * and sends appointment requests via email.
 * 
 * On successful submission, it shows a confirmation modal with instructions.
 * 
 * Dependencies:
 * - Angular Reactive Forms for form control and validation.
 * - ngx-toastr for user notifications.
 * - ngx-bootstrap modal for modal dialogs.
 * - A custom SendEmailService for sending emails.
 * 
 * Key properties:
 * - form: Main user details form.
 * - careProviderForm: Form for primary care provider info.
 * - forWhoForm: Form for family member details.
 * - isSending: Tracks email sending state to disable UI during sending.
 * - appointmentMessage: HTML string for confirmation modal content.
 * 
 * Methods:
 * - ngOnInit: Initializes forms and subscribes to query parameters.
 * - sendEmail: Sends the appointment request email and handles UI feedback.
 * - openMessageModal: Opens a modal dialog with a custom message.
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../../../common/modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SendEmailService } from '../../../shared/services/send-email.service';

@Component({
    selector: 'app-form',
    standalone: false,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    providers: [BsModalService],
})
export class FormComponent {
    form!: FormGroup;
    careProviderForm!: FormGroup;
    forWhoForm!: FormGroup;
    isSending: boolean = false;
    bsModalRef: any;
    appointmentMessage: string = `<div class="message">
        <h1>✅ Your Appointment Request Has Been Received!</h1>
        <p>Thank you for choosing TeamWork Health. Our scheduling team is reviewing your request, and we will contact you within <strong>1–2 business days</strong> to confirm your appointment details.</p>
       
        <h2>What Happens Next?</h2>
        <p><span class="icon">📩</span><strong>Review & Confirmation</strong><br>
        Our team will carefully review your request and match you with the right specialist for your needs.</p>
       
        <p><span class="icon">📞</span><strong>Expect a Call or Email</strong><br>
        A TeamWork Health representative will contact you to confirm your appointment date, time, and any additional information needed.</p>
       
        <p><span class="icon">📝</span><strong>Prepare for Your Visit</strong><br>
        If this is your first visit, please bring a photo ID, insurance card, and any relevant medical records.<br>
        You may receive a secure email with pre-appointment forms to complete in advance.</p>
       
        <div class="contact">
            <h2>Need to Make Changes?</h2>
            <p>If you need assistance or need to cancel your appointment request, please contact us:</p>
            <p>📞 <strong>Phone:</strong> <a href="tel:9192381110">919-238-1110</a></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:appointments@twhasg.com">appointments@twhasg.com</a></p>
        </div>
       
        <p>We look forward to serving you!</p>
        <p><strong>TeamWork Health</strong></p>
    </div>
`;
    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _toastr: ToastrService,
        private modalService: BsModalService,
        private router: Router,
        private _sendEmail: SendEmailService
    ) { }
    params: any;

    // params: any = {};

    ngOnInit(): void {
        this.form = this.fb.group({
            fullName: ['', Validators.required],
            phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            email: ['', [Validators.required, Validators.email]],
            dateOfBirth: ['', Validators.required],
            insuranceComNam: ['', Validators.required],
            insuranceComNum: [
                '',
                Validators.required,
                Validators.pattern(/^\d+$/),
            ],
            age: ['', Validators.required],
            address: ['', Validators.required],
            symptoms: ['', Validators.required],
        });

        this.forWhoForm = this.fb.group({
            memberName: ['', Validators.required],
            selectedRelation: ['', Validators.required],
        });

        this.careProviderForm = this.fb.group({
            primaryCareProvider: ['', Validators.required],
        });

        this.route.queryParams.subscribe((params) => {
            this.params = params;
            delete this.params.memberRelation;
        });
        // this.sendEmail()
    }

    sendEmail() {
        this.isSending = true;

        const emailParams = {
            to_email: 'mo@twhasg.com',
            form_title: `New Appointment Request`,
            message: `
            - Member Name: ${this.params.memberName}
            - Relationship: ${this.params.selectedRelation}
            - Primary Care Provider: ${this.params.primaryCareProvider || 'N/A'}
            service: ${this.params.service}
            For: ${this.params.whom}
            status: ${this.params.status} and My Previous Provider is ${this.params.previousProvider
                } 
            - Full Name: ${this.form.value.fullName}
            - Phone: ${this.form.value.phone}
            - Email: ${this.form.value.email}
            - Date of Birth: ${this.form.value.dateOfBirth}
            - Insurance Company Name: ${this.form.value.insuranceComNam}
            - Insurance Company Number: ${this.form.value.insuranceComNum}
            - Age: ${this.form.value.age}
            - Address: ${this.form.value.address}
            - Symptoms: ${this.form.value.symptoms}
          `,
        };
        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.appointmentMessage);
                    this.form.reset();
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
        //         this.form.reset();
        //         this.forWhoForm.reset();
        //         this.careProviderForm.reset();
        //         this.isSending = false;
        //         this.router.navigate(['/']);
        //         this.openMessageModal(this.appointmentMessage);
        //     })
        //     .catch((error) => {
        //         console.error('Error sending email:', error);
        //         this.isSending = false;
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
