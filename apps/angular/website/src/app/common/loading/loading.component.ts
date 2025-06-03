/**
 * --------------------------------------------------------------------------
 * Loading Component
 * --------------------------------------------------------------------------
 * 
 * Global loading indicator overlay that shows/hides based on LoadingService state
 * 
 * @Component {
 *   selector: 'app-loading',
 *   standalone: true,
 *   templateUrl: './loading.component.html',
 *   styleUrls: ['./loading.component.scss']
 * }
 * 
 * KEY FEATURES:
 * - Displays full-screen overlay during loading states
 * - Integrates with LoadingService for centralized control
 * - Uses Angular async pipe for automatic subscription management
 * - Accessibility-ready with ARIA attributes
 * 
 * DEPENDENCIES:
 * - LoadingService: Centralized loading state management
 * - RxJS Observables: For reactive state handling
 * 
 * IMPLEMENTATION DETAILS:
 * • Subscribes to LoadingService's isLoading$ observable
 * • Uses Angular's async pipe for safe subscription handling
 * • Implements ARIA attributes for screen readers
 * 
 * ACCESSIBILITY:
 * • aria-busy: Indicates busy state
 * • aria-live: Announces loading state changes
 * • role="status": Identifies status message region
 * 
 * BEST PRACTICES:
 * • Always use async pipe for observable subscriptions
 * • Avoid manual subscriptions in components
 * • Type observable properties explicitly
 * 
 * USAGE:
 * <app-loading></app-loading>
 * 
 * MAINTENANCE:
 * © 2025 Dream Care <DreamCare@gmail.com>
 * GitHub: @DreamCare ▸ MIT Licensed
 * --------------------------------------------------------------------------
 */


import { Component } from '@angular/core';
import { LoadingService } from '../../shared/services/loading.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  isLoading$: any;
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading$ = this.loadingService.isLoading$;
    this.isLoading$.subscribe((isLoading: any) => {
      console.log('isLoading', isLoading);
    });
  }
}
