/**
 * |--------------------------------------------------------------------------
 * | OurLocationsComponent
 * |--------------------------------------------------------------------------
 * 
 * @component
 * @selector app-our-locations
 * @standalone true
 * 
 * ### PURPOSE
 * - Displays the list, map, or details of company or clinic locations.
 * - Intended to be used in informational or contact-related sections.
 * 
 * ### STRUCTURE
 * - Angular Standalone Component (No NgModule required)
 * - External template and styling via `templateUrl` and `styleUrl`
 * 
 * ### DEPENDENCIES
 * - None at the moment (clean standalone setup)
 * - Future: May include location services, maps, or shared UI modules
 * 
 * ### FUNCTIONAL RESPONSIBILITIES
 * ❌ No logic currently implemented (placeholder shell)
 * ❌ No inputs or outputs
 * ✅ Ready for UI and logic expansion
 * 
 * ### STYLING
 * - SCSS file: `our-locations.component.scss`
 * - Expected to handle layout, spacing, responsiveness
 * 
 * ### USAGE EXAMPLE
 * ```html
 * <app-our-locations></app-our-locations>
 * ```
 * 
 * ### ACCESSIBILITY CONSIDERATIONS (Future)
 * - Ensure locations are described textually for screen readers
 * - Provide map alternatives (if implemented)
 * 
 * ### RECOMMENDED IMPROVEMENTS
 * 1. Add component-level JSDoc for logic as it evolves
 * 2. Define @Input() for dynamic location data
 * 3. Integrate a LocationService for data fetching
 * 4. Include unit tests for rendering and interaction
 * 
 * ### MAINTENANCE
 * - Component Status: Minimal (Scaffolded)
 * - Last Updated: 2025-Q2
 * - Maintainer: Frontend Team
 * - Contact: ui-core@dreamcare.dev
 * 
 * @version Angular 15+
 * @license MIT
 * @location /src/app/components/our-locations/
 * @tags locations, angular, standalone, ui-component
 * |--------------------------------------------------------------------------
 */


import { Component } from '@angular/core';

@Component({
    selector: 'app-our-locations',
    standalone: true,
    imports: [],
    templateUrl: './our-locations.component.html',
    styleUrl: './our-locations.component.scss',
})
export class OurLocationsComponent { }
