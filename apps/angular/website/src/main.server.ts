/** 
|--------------------------------------------------------------------------
| Server Bootstrap Configuration
|--------------------------------------------------------------------------
|
| Angular server-side bootstrapping entry point
|
| CORE FUNCTIONALITY
| 1. Platform Initialization:
|    - Server-side application bootstrap
|    - Angular Universal integration
|    - Standalone component architecture
|
| 2. Configuration:
|    - Merges server-specific config
|    - Sets up providers for SSR
|    - Handles platform-server requirements
|
| SECURITY CONSIDERATIONS
| 1. Server Risks:
|    - Prevent SSR injection attacks
|    - Sanitize server-transferred state
|    - Avoid exposing sensitive config
|
| 2. Best Practices:
|    - Use CSP-compliant bootstrapping
|    - Validate server environment
|    - Secure server config loading
|
| BEST PRACTICE IMPROVEMENTS
| 1. Configuration:
|    - Implement environment validation
|    - Add server-side feature flags
|    - Use configuration factory pattern
|
| 2. Error Handling:
|    - Add server bootstrap retries
|    - Implement health checks
|    - Add SSR failure fallbacks
|
| 3. Performance:
|    - Enable server-side caching
|    - Implement memory management
|    - Add request size limits
|
| MAINTENANCE GUIDELINES
| 1. Angular Updates:
|    - Monitor platform-server changes
|    - Verify SSR API compatibility
|    - Update server config schema
|
| 2. Configuration Changes:
|    - Modify app.config.server.ts
|    - Maintain server/client parity
|    - Audit provider dependencies
|
| 3. Deployment:
|    - Monitor server bundle size
|    - Verify production mode
|    - Check SSR rendering benchmarks
|
| VERSION COMPATIBILITY
| Angular: ≥15 (Standalone API)
| TypeScript: ≥4.8
| Platform-server: 15+
| Last Updated: 2023-11-07
|
| PERFORMANCE
| - Cold Start: Monitor server init time
| - Memory: Watch SSR memory leaks
| - Throughput: Optimize concurrent requests
|
| ACCESSIBILITY
| - Ensure server-rendered a11y
| - Verify DOM hydration matches
| - Audit SSR text alternatives
|
| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
