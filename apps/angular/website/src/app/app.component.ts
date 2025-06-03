/** 
|--------------------------------------------------------------------------
| App Component Documentation
|--------------------------------------------------------------------------
|
| Root application component with global navigation behavior
|
| CORE FUNCTIONALITY
| 1. Scroll Management:
|    - Auto-scroll to top on route changes
|    - Smooth scroll behavior (modern browsers)
|    - Safari/legacy browser fallback
|    - 50ms render delay handling

| 2. Global Features:
|    - Router outlet container
|    - Loading component integration
|    - Zone.js optimization

| SECURITY CONSIDERATIONS
| 1. Scroll Behavior:
|    - No DOM injection risks
|    - Safe window reference check
|    - NgZone execution context control

| 2. Risks:
|    - Potential layout shift during scroll
|    - Browser compatibility exceptions

| BEST PRACTICE IMPROVEMENTS
| 1. Scroll Handling:
|    - Add scroll position restoration option
|    - Implement scroll debounce
|    - Add scrollend event listener

| 2. Performance:
|    - Use Angular ViewportScroller service
|    - Implement passive scroll listeners
|    - Add scroll attempt timeout

| 3. Reliability:
|    - Add error logging
|    - Implement attempt counter
|    - Add browser feature detection

| MAINTENANCE GUIDELINES
| 1. Scroll Updates:
|    - Modify delay timer (currently 50ms)
|    - Adjust scroll position offsets
|    - Update fallback detection

| 2. Navigation Changes:
|    - Maintain router event subscription
|    - Verify NgZone usage patterns
|    - Monitor Angular version changes

| 3. Dependencies:
|    - RxJS filter operator
|    - Router events API
|    - Browser platform checks

| PERFORMANCE NOTES
| - Smooth scroll: May impact FPS
| - Zone.js: runOutsideAngular optimization
| - Timer: Microtask queue management

| ACCESSIBILITY
| - Ensure scroll doesn't break focus
| - Verify screen reader navigation
| - Add scroll completion ARIA alerts

| VERSION COMPATIBILITY
| Angular: ≥15 (Standalone)
| RxJS: ≥7.8
| TypeScript: ≥4.8
| Last Updated: 2023-11-07

| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/

import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { LoadingComponent } from './common/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Teamwork Health';

  constructor(private router: Router, private ngZone: NgZone) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof window !== 'undefined') {
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              try {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              } catch (e) {
                // Fallback for Safari mobile and older browsers
                window.scrollTo(0, 0);
              }
            }, 50); // small delay for Safari rendering
          });
        }
      });
  }
}
