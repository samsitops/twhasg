/**
 * AppointmentRoutingModule
 * Defines the multi-step routing structure for the clinical appointment process.
 * All steps are nested under the AppointmentComponent and rendered via its <router-outlet>.
 * Steps include:
 * - info → request basic info
 * - forWho → check if it's for the patient or someone else
 * - patient-status → current medical status
 * - form → personal & health details
 * - select-options → trial options
 * - care-provider → select provider or facility
 */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';
import { ForWhoComponent } from './for-who/for-who.component';
import { FormComponent } from './form/form.component';
import { PatientStatusComponent } from './patient-status/patient-status.component';
import { RequestComponent } from './request/request.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { CareProviderComponent } from './care-provider/care-provider.component';

const routes: Routes = [
    {
        path: '',
        component: AppointmentComponent,
        children: [
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full',
            },
            {
                path: 'info',
                component: RequestComponent,
            },
            {
                path: 'forWho',
                component: ForWhoComponent,
            },
            {
                path: 'patient-status',
                component: PatientStatusComponent,
            },
            {
                path: 'form',
                component: FormComponent,
            },
            {
                path: 'select-options',
                component: SelectOptionsComponent,
            },
            {
                path: 'care-provider',
                component: CareProviderComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppointmentRoutingModule { }
