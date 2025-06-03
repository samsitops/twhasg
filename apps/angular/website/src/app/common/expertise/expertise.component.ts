/**
 * --------------------------------------------------------------------------
 * Expertise Component
 * --------------------------------------------------------------------------
 * 
 * Controller for dual-layout behavioral health services display
 * 
 * @Component {
 *   selector: 'app-expertise',
 *   standalone: true,
 *   templateUrl: './expertise.component.html',
 *   styleUrls: ['./expertise.component.scss']
 * }
 * 
 * CORE FUNCTIONALITY:
 * • Manages layout switching between:
 *   - Default 3x2 icon grid
 *   - Speciality 2x2 image grid + emergency section
 * • Handles route-based display logic
 * 
 * IMPORTS:
 * - RouterLink: For service detail navigation
 * - NgClass: Conditional layout classes
 * - NgIf: Optional element rendering
 * - TooltipModule: Service title tooltips (ngx-bootstrap)
 * 
 * DEPENDENCIES:
 * - @angular/router: For route detection
 * - ngx-bootstrap/tooltip: v8+ for interactive tooltips
 * 
 * ROUTE HANDLING:
 * • Hides default layout on:
 *   - /index-2
 *   - /index-3
 *   - /about
 * • Shows speciality layout on above routes
 * 
 * DATA FLOW:
 * • Template-driven (no internal state)
 * • Router dependency injected for path checking
 * 
 * ACCESSIBILITY:
 * • Requires ARIA labels in template
 * • Needs keyboard navigation support
 * • Tooltips should be screen-reader accessible
 * 
 * MAINTENANCE:
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */

import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
    selector: 'app-expertise',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, TooltipModule],
    templateUrl: './expertise.component.html',
    styleUrl: './expertise.component.scss',
})
export class ExpertiseComponent {
    constructor(public router: Router) { }
}
