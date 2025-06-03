/** 
|--------------------------------------------------------------------------
| Server Configuration Documentation
|--------------------------------------------------------------------------
|
| Angular server-side rendering (SSR) configuration setup
|
| CORE FUNCTIONALITY
| 1. Configuration Merging:
|    - Combines client/app config with SSR providers
|    - Preserves client-side providers
|    - Adds server rendering capabilities

| 2. Server-Specific Features:
|    - Enables Angular Universal rendering
|    - Handles DOM emulation
|    - Manages SSR lifecycle hooks

| SECURITY CONSIDERATIONS
| 1. Server Rendering:
|    - Prevent XSS in serialized state
|    - Sanitize transfer state data
|    - Avoid server-side secret exposure

| 2. Configuration Risks:
|    - Validate merged providers
|    - Audit shared client/server providers
|    - Secure environment variables

| BEST PRACTICE IMPROVEMENTS
| 1. Configuration Management:
|    - Add environment validation
|    - Implement config encryption
|    - Use feature toggles for SSR

| 2. Error Handling:
|    - Add SSR failure fallback
|    - Implement health checks
|    - Add configuration debug mode

| 3. Performance:
|    - Enable SSR caching
|    - Add memory leak detection
|    - Implement request throttling

| MAINTENANCE GUIDELINES
| 1. Configuration Updates:
|    - Modify app.config.ts base
|    - Add server-only providers here
|    - Maintain provider compatibility

| 2. Angular Updates:
|    - Monitor platform-server changes
|    - Verify config merging behavior
|    - Check SSR API deprecations

| 3. Deployment:
|    - Audit merged configuration
|    - Monitor SSR memory usage
|    - Verify production mode

| VERSION COMPATIBILITY
| Angular: ≥15 (Standalone)
| Platform-server: ≥15.0
| TypeScript: ≥4.8
| Last Updated: 2023-11-07

| PERFORMANCE OPTIMIZATIONS
| - Enable server-side caching
| - Implement efficient hydration
| - Use optimized JSON serialization

| ACCESSIBILITY
| - Verify SSR content accessibility
| - Ensure screen reader compatibility
| - Audit server-rendered ARIA

| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
