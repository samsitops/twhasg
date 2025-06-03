/** 
|--------------------------------------------------------------------------
| Application Configuration Documentation
|--------------------------------------------------------------------------
|
| Angular application-wide provider configuration
|
| CORE FUNCTIONALITY
| 1. Framework Configuration:
|    - Zone.js change detection (event coalescing)
|    - Client hydration (SSR support)
|    - Router configuration

| 2. Feature Providers:
|    - Browser animations (sync/async)
|    - Toastr notifications
|    - HTTP client services

| 3. Optimization:
|    - Event coalescing for performance
|    - Async animation support
|    - Tree-shakable provider setup

| SECURITY CONSIDERATIONS
| 1. HTTP Handling:
|    - XSRF protection needed
|    - CORS configuration required
| 2. UI Risks:
|    - Toastr XSS potential
|    - Animation performance impacts
| 3. Zone.js:
|    - Event coalescing security audit

| BEST PRACTICE IMPROVEMENTS
| 1. HTTP Client:
|    - Migrate to provideHttpClient()
|    - Add XSRF interceptors
|    - Implement request caching

| 2. Toastr:
|    - Configure timeout/position
|    - Add accessibility labels
|    - Implement click tracking

| 3. Animations:
|    - Add reduced motion support
|    - Implement animation disabled mode
|    - Use lazy-loaded animations

| MAINTENANCE GUIDELINES
| 1. Provider Updates:
|    - Add new providers in order
|    - Maintain zone.js first position
|    - Keep hydration after router

| 2. Dependency Updates:
|    - Verify ngx-toastr compatibility
|    - Check animation API changes
|    - Audit HttpClient breaking changes

| 3. Configuration:
|    - Add environment-specific providers
|    - Implement feature flags
|    - Add configuration validation

| VERSION COMPATIBILITY
| Angular: ≥15 (Standalone)
| Zone.js: ≥0.14+
| ngx-toastr: ≥17+
| RxJS: ≥7.8
| Last Updated: 2023-11-07

| ACCESSIBILITY
| - Toastr requires ARIA live regions
| - Animations need prefers-reduced-motion
| - Focus management for route changes

| PERFORMANCE
| - Event coalescing boosts render speed
| - Client hydration reduces FCP
| - Tree-shaking via standalone APIs

| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/

import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    importProvidersFrom(HttpClientModule),
  ],
};
