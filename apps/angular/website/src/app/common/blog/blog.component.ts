/**
 * -----------------------------------------------------------------------------
 *  blog.component.ts — Blog Listing Component
 * -----------------------------------------------------------------------------
 *
 *  🚀 Description
 *  This standalone Angular component displays a list of blog posts by 
 *  iterating over a static `blogs` array imported from shared constants.
 *  It facilitates navigation to individual blog details using Angular Router.
 *
 *  ✅ Features:
 *  • Uses Angular structural directives (`*ngFor`, `*ngIf`) to render content dynamically.
 *  • Applies `NgClass` directive for conditional styling.
 *  • Integrates with Angular Router via `RouterLink` for navigation.
 *  • Exposes the `Router` service for potential programmatic routing.
 *
 *  🔧 Implementation Details:
 *  • Imports reusable UI directives from `@angular/common`.
 *  • Uses standalone component approach for simplified module management.
 *  • Data source `blogs` is imported from a shared constants file.
 *
 *  📦 Dependencies:
 *  • `Router` from `@angular/router` for routing control.
 *  • `blogs` constant array providing blog data.
 *
 * -----------------------------------------------------------------------------
 *  © 2025 Dream Care <DreamCare@gmail.com>
 *  GitHub: @DreamCare ▸ Licensed under the MIT License
 * -----------------------------------------------------------------------------
 */

import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { blogs } from '../../shared/consts/blogs';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [RouterLink, NgClass, NgIf, NgFor],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
})
export class BlogComponent {
    /** Array of blog post objects sourced from shared constants */
    blogs = blogs;

    /**
     * @param router Angular Router service injected for programmatic navigation
     */
    constructor(public router: Router) { }
}
