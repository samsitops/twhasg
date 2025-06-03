/**
 * AppointmentModule
 * 
 * This module encapsulates all functionality related to the appointment booking workflow.
 * It declares components that handle various steps such as requesting an appointment,
 * patient information, status, forms, selection options, and care provider selection.
 * 
 * It imports common shared components like Navbar, Footer, ProgressBar, and utility modules
 * including ReactiveFormsModule for form handling, TooltipModule, and BsDatepickerModule
 * for datepicker functionality.
 * 
 * The module also imports its routing module to handle navigation between appointment steps.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { ProgressBarComponent } from '../../common/progress-bar/progress-bar.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { RequestComponent } from './request/request.component';
import { ForWhoComponent } from './for-who/for-who.component';
import { PatientStatusComponent } from './patient-status/patient-status.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CareProviderComponent } from './care-provider/care-provider.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    declarations: [
        AppointmentComponent,
        RequestComponent,
        ForWhoComponent,
        PatientStatusComponent,
        FormComponent,
        SelectOptionsComponent,
        CareProviderComponent,
    ],
    imports: [
        CommonModule,
        AppointmentRoutingModule,
        ProgressBarComponent,
        NavbarComponent,
        FooterComponent,
        TooltipModule.forRoot(),
        InnerPageBannerComponent,
        BackToTopComponent,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot(),
    ],
})
export class AppointmentModule { }
