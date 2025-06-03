/**
 * BlogDetailsPageComponent
 * -----------------------
 * This standalone Angular component displays detailed content for a single blog post.
 * 
 * Features:
 * - Retrieves the blog details based on the URL slug from the route parameters.
 * - Shows related blogs excluding the current one.
 * - Implements a reactive feedback form with validation for name, email, phone, industry, and feedback message.
 * - Sends feedback emails using a dedicated email service and shows confirmation modals.
 * - Uses ngx-toastr for user notifications (success/error).
 * - Includes common UI components like header, navbar, banner, footer, and back-to-top button.
 * 
 * Dependencies:
 * - ActivatedRoute for route param subscription
 * - FormBuilder and ReactiveFormsModule for the feedback form
 * - BsModalService for modal dialog handling
 * - ToastrService for toast notifications
 * - SendEmailService for backend email communication
 * 
 */



import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { blogs } from '../../shared/consts/blogs';
import { NgFor, NgIf } from '@angular/common';
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { ModalComponent } from '../../common/modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SendEmailService } from '../../shared/services/send-email.service';

@Component({
    selector: 'app-blog-details-page',
    standalone: true,
    imports: [
        RouterLink,
        TopHeaderComponent,
        NavbarComponent,
        InnerPageBannerComponent,
        FooterComponent,
        BackToTopComponent,
        NgFor,
        NgIf,
        ReactiveFormsModule,
    ],
    templateUrl: './blog-details-page.component.html',
    styleUrl: './blog-details-page.component.scss',
    providers: [BsModalService],
})
export class BlogDetailsPageComponent {
    blogs = blogs as any;
    relatedBlogs = [] as any;
    blogsDetails: any | null = null;
    feedbackForm: FormGroup = new FormGroup({});
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
    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private _toastr: ToastrService,
        private modalService: BsModalService,
        private _sendEmail: SendEmailService
    ) { }

    ngOnInit(): void {
        this._ActivatedRoute.params.subscribe((params: any) => {
            const slug = params.slug;
            this.blogsDetails = this.blogs.find(
                (blog: any) => blog.slug === slug
            );
            this.relatedBlogs = this.blogs.filter(
                (blog: any) => blog.slug != slug
            );
        });

        this.feedbackForm = this.fb.group({
            name: [
                '',
                Validators.required,
                Validators.pattern(/^[a-zA-Z\s]*$/),
            ],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            industry: ['', Validators.required],
            feedback: ['', Validators.required],
        });
    }
    sendEmail() {
        const emailParams = {
            from_name: this.feedbackForm.value.name,
            to_email: 'mo@twhasg.com',
            form_title: this.blogsDetails.title,
            message: `
            Name: ${this.feedbackForm.value.name}\n.
            Phone: ${this.feedbackForm.value.phone}\n
            Email: ${this.feedbackForm.value.email}\n.
            Industry: ${this.feedbackForm.value.industry}\n.
            Feedback: ${this.feedbackForm.value.feedback}\n.
            `,
        };
        this._sendEmail
            .sendEmail(emailParams.to_email, emailParams.message)
            .subscribe({
                next: () => {
                    this.openMessageModal(this.feedBackMessage);
                    this.feedbackForm.reset();
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
        //         this.feedbackForm.reset();
        //         this.openMessageModal(this.feedBackMessage);
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
