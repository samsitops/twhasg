/**
 * -----------------------------------------------------------------------------
 *  book-an-appointment.component.ts — Book An Appointment Component
 * -----------------------------------------------------------------------------
 *
 *  🚀 Description
 *  This standalone Angular component provides a user interface for booking 
 *  appointments. It integrates Angular's RouterLink directive to enable 
 *  seamless navigation within the app.
 *
 *  ✅ Features:
 *  • Uses Angular's standalone component model for modularity.
 *  • Imports RouterLink directive for in-template navigation.
 *  • External template and styles provide separation of concerns.
 *
 *  🔧 Implementation Details:
 *  • Uses minimal logic as a presentational component.
 *  • Designed to be reusable and easily integrable.
 *
 *  📦 Dependencies:
 *  • `RouterLink` from `@angular/router` for navigation support.
 *
 * -----------------------------------------------------------------------------
 *  © 2025 Dream Care <DreamCare@gmail.com>
 *  GitHub: @DreamCare ▸ Licensed under the MIT License
 * -----------------------------------------------------------------------------
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-book-an-appointment',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './book-an-appointment.component.html',
    styleUrls: ['./book-an-appointment.component.scss']
})
export class BookAnAppointmentComponent {
    // Component logic can be added here if needed in the future
}
