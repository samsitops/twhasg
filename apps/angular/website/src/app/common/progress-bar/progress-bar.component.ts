/**
 * |--------------------------------------------------------------------------
 * | ProgressBarComponent
 * |--------------------------------------------------------------------------
 * 
 * @component
 * @selector app-progress-bar
 * 
 * ### Core Responsibilities
 * 1. Dynamically reflect user's progress across multi-step navigation
 * 2. Visual representation of current step in a step-based workflow
 * 3. Sync with router events to infer progress from current URL
 * 
 * @description
 * A standalone Angular component that calculates progress as the user
 * navigates through a predefined set of routes (`steps`). Includes dynamic
 * percentage calculation and image marker movement. Optional query param
 * tracking for contextual use (e.g., "whom").
 * 
 * ### Dependencies
 * - Angular Core: Component, Router, NavigationEnd, ActivatedRoute
 * - Angular Common: NgIf, NgFor, binding
 * 
 * ### Public Members
 * • `steps: string[]`  
 *   - Route segments representing the steps in the progress
 *   - Must match actual routing paths
 * 
 * • `currentStep: number`  
 *   - Index of the current step based on the active route
 * 
 * • `forWho: any`  
 *   - Captures optional query parameter (`?whom=value`)
 * 
 * • `progress: number`  
 *   - Computed property that returns progress percentage
 *   - Formula: (currentStep / (steps.length - 1)) * 100
 * 
 * ### Lifecycle Behavior
 * • Subscribes to `router.events` to detect route changes
 * • Updates current step index when `NavigationEnd` fires
 * • Also listens to `queryParams` to extract additional data
 * 
 * ### Key Methods
 * • `updateCurrentStep(url: string): void`
 *   - Checks if current route matches any step and updates index
 *   - Defaults to `0` if no match is found
 * 
 * ### Best Practices
 * ✅ Uses Angular Standalone Component API (v15+)
 * ✅ Reactive to routing changes without extra state management
 * ⚠️ Nested subscriptions may benefit from switchMap / takeUntil pattern
 * 
 * ### Recommended Enhancements
 * 1. Use `combineLatest([router.events, route.queryParams])` for cleaner handling
 * 2. Handle unsubscribe via `takeUntil` + `ngOnDestroy`
 * 3. Add type safety for `forWho` (avoid `any`)
 * 4. Externalize step definitions to config/service for reusability
 * 5. Add input bindings to allow step injection from parent component
 * 
 * ### Accessibility & Security
 * • No direct DOM access (safe)
 * • Query param usage is safe if sanitized in templates
 * 
 * ### Maintenance
 * - Component Version: 1.0.0
 * - Last Updated: 2025-Q2
 * - File Path: /src/app/components/progress-bar/progress-bar.component.ts
 * - Maintainer: Frontend UI Team
 * 
 * @license MIT
 * @author
 * - Dream Care Frontend
 * - GitHub: @DreamCare
 * |--------------------------------------------------------------------------
 */


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-progress-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
    steps = [
        'info',
        'select-options',
        'forWho',
        'patient-status',
        'care-provider',
        'form',
    ]; // Matches the routes exactly
    currentStep = 0;
    forWho: any;

    constructor(private router: Router, private route: ActivatedRoute) {
        // Listen to route changes to update progress
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.updateCurrentStep(event.urlAfterRedirects);
                this.route.queryParams.subscribe((params) => {
                    this.forWho = params['whom'];
                });
            }
        });
    }

    get progress(): number {
        return (this.currentStep / (this.steps.length - 1)) * 100;
    }

    updateCurrentStep(url: string): void {
        const stepIndex = this.steps.findIndex((step) => url.includes(step));
        this.currentStep = stepIndex !== -1 ? stepIndex : 0;
    }
}
