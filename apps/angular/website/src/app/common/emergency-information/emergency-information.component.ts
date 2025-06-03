/**
 * --------------------------------------------------------------------------
 * Emergency Information Component
 * --------------------------------------------------------------------------
 * 
 * Displays critical contact information with:
 * - Location-based emergency contacts
 * - Direct call-to-action buttons
 * - Responsive multi-column layout
 * 
 * @Component
 * @selector app-emergency-information
 * @standalone true
 * 
 * Features:
 * • Priority-ranked contact hierarchy
 * • One-tap call/email initiation
 * • Responsive layout (3 → 1 columns)
 * • High-contrast emergency styling
 * 
 * Dependencies:
 * - Angular 17+ (standalone component)
 * - Angular Router v17+
 * 
 * Imports:
 * - RouterLink: For navigation
 * 
 * Data Structure:
 * contacts: Array<{
 *   type: 'phone' | 'fax' | 'location';
 *   label: string;
 *   value: string;
 *   priority: number;
 *   icon?: string;
 * }>
 * 
 * Accessibility:
 * - ARIA labels for all interactive elements
 * - Color contrast ratio > 4.5:1
 * - Keyboard-navigable contact items
 * 
 * Configuration:
 * - Breakpoints: 992px (desktop), 768px (tablet)
 * - Hover effects on interactive elements
 * - Emergency color scheme (red/white)
 * 
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-emergency-information',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './emergency-information.component.html',
    styleUrl: './emergency-information.component.scss',
})
export class EmergencyInformationComponent { }
