/**
 * LOADING SERVICE
 * 
 * A centralized service for managing loading states across the application.
 * Provides observable loading status and methods to control loading indicators.
 * 
 * Features:
 * - Singleton service provided at root level
 * - RxJS BehaviorSubject for state management
 * - Simple show/hide API
 * - Observable loading state for component binding
 * 
 * Usage:
 * 1. Inject service in components/services:
 *    constructor(private loadingService: LoadingService) {}
 * 
 * 2. Control loading state:
 *    this.loadingService.show();  // Start loading
 *    this.loadingService.hide();  // End loading
 * 
 * 3. Subscribe to state changes:
 *    this.loadingService.isLoading$.subscribe(isLoading => {
 *      // Update loading UI
 *    });
 * 
 * Best Practices:
 * - Use in HTTP interceptors for automatic request tracking
 * - Combine with async pipe in templates
 * - Avoid multiple show() calls without matching hide()
 * - Consider debouncing for quick operations
 * 
 * Dependencies:
 * - Requires RxJS (BehaviorSubject, Observable)
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    isLoading$ = this.loadingSubject.asObservable();

    show() {
        this.loadingSubject.next(true);
    }

    hide() {
        this.loadingSubject.next(false);
    }
}
