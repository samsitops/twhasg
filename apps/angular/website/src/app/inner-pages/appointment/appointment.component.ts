/**
 * AppointmentComponent
 * 
 * This component acts as the container for the appointment booking process.
 * It primarily hosts the router outlet where child components related to
 * different steps of the appointment flow are rendered.
 * 
 * The component itself contains minimal logic and serves mainly as a layout wrapper.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'app-appointment',
    standalone: false,
    templateUrl: './appointment.component.html',
    styleUrl: './appointment.component.scss',
})
export class AppointmentComponent { }
