/**
 * -----------------------------------------------------------------------------
 *  main.ts — Angular Application Entry Point
 * -----------------------------------------------------------------------------
 *
 *  🚀 Description
 *  This file is the root entry point of the Angular application. It is 
 *  responsible for bootstrapping the root component (`AppComponent`) using 
 *  the `bootstrapApplication()` method introduced with Angular’s standalone API.
 *
 *  ✅ Benefits of Standalone API:
 *  • No need for traditional NgModules.
 *  • Faster startup time.
 *  • Simpler structure and better tree-shaking.
 *
 *  🔧 Error Handling:
 *  Unhandled errors during the bootstrap process are caught and logged to 
 *  the console for easier debugging during development.
 *
 * -----------------------------------------------------------------------------
 *  © 2025 Dream Care <DreamCare@gmail.com>
 *  GitHub: @DreamCare ▸ Licensed under the MIT License
 * -----------------------------------------------------------------------------
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Bootstraps the root AppComponent using the application's configuration.
 *
 * @remarks
 * The `appConfig` contains essential providers (like routing, HTTP, etc.)
 * and is passed along to initialize the app properly.
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(
    '[Bootstrap Error] An error occurred while starting the application:',
    err
  )
);
