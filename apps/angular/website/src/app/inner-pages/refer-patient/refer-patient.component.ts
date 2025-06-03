/**
 * ReferPatientComponent
 *
 * This standalone Angular component handles the "Refer a Patient" page.
 * It includes a reactive form for collecting provider and practice information
 * and sends the data via email upon submission.
 *
 * Imports:
 * - Angular common modules and ReactiveFormsModule for form creation and validation.
 * - Shared UI components like Navbar, Footer, and Modal.
 * - External services: ToastrService for toast notifications, BsModalService for modal dialogs,
 *   and a custom SendEmailService for sending emails.
 *
 * Properties:
 * - referPatientForm: A FormGroup instance representing the referral form.
 * - referPatientMessage: A predefined HTML message shown after successful submission.
 * - bsModalRef: Reference to the modal dialog instance.
 *
 * ngOnInit():
 * - Initializes the form with the following fields:
 *   - providerFullName: Required, alphabetic characters and spaces only.
 *   - practiceName: Required, alphabetic characters and spaces only.
 *   - NPINumber: Required, numeric only.
 *   - phoneNumber: Required, 10-digit number.
 *   - emailAddress: Required, must be a valid email.
 *   - faxNumber: Required (no specific pattern applied).
 *
 * sendEmail():
 * - Gathers form data and formats it into an email message.
 * - Uses the custom SendEmailService to send the email to the predefined address.
 * - On success:
 *   - Resets the form.
 *   - Opens a modal with the thank-you message.
 *   - Displays a success toast message.
 * - On error:
 *   - Logs the error to the console.
 *   - Displays an error toast message.
 *
 * openMessageModal(message: string):
 * - Opens a static (non-dismissible) modal to display a given message.
 *
 * Notes:
 * - The code contains commented-out logic for using EmailJS, which could serve as an alternative email-sending method.
 * - Although the Router is injected, it is not currently used in this component.
 * - Designed with modularity in mind by using standalone components and services.
 */


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../../common/modal/modal.component';
import { SendEmailService } from '../../shared/services/send-email.service';

@Component({
    selector: 'app-refer-patient',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        TopHeaderComponent,
        NavbarComponent,
        InnerPageBannerComponent,
        FooterComponent,
        BackToTopComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './refer-patient.component.html',
    styleUrl: './refer-patient.component.scss',
    providers: [BsModalService],
})
export class ReferPatientComponent {
    referPatientForm: FormGroup = new FormGroup({});
    bsModalRef: any;
    referPatientMessage: string = `
    <div class="message">
        <h1>✅ Thank You for Referring Your Patient to TeamWork Health!</h1>
        <p>We appreciate your trust in our team. To ensure HIPAA compliance and protect patient privacy, we’ve sent you an email with the next steps to finalize this referral.</p>
       
        <h2>What Happens Next?</h2>
        <p><span class="icon">📩</span><strong>Check Your Email</strong><br>
        You will receive an email from us with a referral form attached.</p>
       
        <p><span class="icon">📝</span><strong>Complete the Referral Form</strong><br>
        Please fill out the form with the required patient details, including medical history and supporting documents.</p>
       
        <p><span class="icon">📺</span><strong>Fax the Completed Form to Us</strong><br>
        Once the form is completed, please fax it to 📠 <strong>833-428-3630</strong> to securely submit your patient’s referral.</p>
       
        <p><span class="icon">📞</span><strong>Confirmation & Follow-Up</strong><br>
        After receiving the fax, our care coordination team will process the referral and contact your office or the patient within <strong>1–2 business days</strong>.</p>
       
        <div class="contact">
            <h2>Need Assistance?</h2>
            <p>If you have any questions or need urgent support, please reach out to us:</p>
            <p>📞 <strong>Phone:</strong> <a href="tel:9192381110">919-238-1110</a></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:partnerships@twhasg.com">partnerships@twhasg.com</a></p>
        </div>
       
        <p>We appreciate your partnership in providing exceptional patient care!</p>
        <p><strong>TeamWork Health</strong></p>
    </div>`;
    constructor(
        private fb: FormBuilder,
        private toastr: ToastrService,
        private router: Router,
        private modalService: BsModalService,
        private _sendEmail: SendEmailService
    ) { }
    ngOnInit(): void {
        this.referPatientForm = this.fb.group({
            providerFullName: [
                '',
                [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
            ],
            practiceName: [
                '',
                [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
            ],
            NPINumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
            phoneNumber: [
                '',
                [Validators.required, Validators.pattern(/^\d{10}$/)],
            ],
            emailAddress: ['', [Validators.required, Validators.email]],
            faxNumber: ['', [Validators.required]],
        });
    }
    sendEmail() {
        const emailParams = {
            from_name: this.referPatientForm.value.providerFullName,
            to_email: 'mo@twhasg.com',
            message: `
            Full name: ${this.referPatientForm.value.providerFullName}\n
            Practice name: ${this.referPatientForm.value.practiceName}\n.
            NPI: ${this.referPatientForm.value.NPINumber}.
            Phone number: ${this.referPatientForm.value.phoneNumber}\n
            Email: ${this.referPatientForm.value.emailAddress}\n
            Fax number: ${this.referPatientForm.value.faxNumber}\n`,
            form_title: 'Patient Referral',
            from_email: this.referPatientForm.value.emailAddress,
        };

        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.referPatientMessage);
                    this.referPatientForm.reset();
                    this.toastr.success('Email sent successfully');
                    console.log("Email sent successfully");

                },
                error: (error) => {
                    console.error('Error sending email:', error);
                    this.toastr.error('Failed to send email');
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
        //         this.referPatientForm.reset();
        //         this.openMessageModal(this.referPatientMessage);
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
