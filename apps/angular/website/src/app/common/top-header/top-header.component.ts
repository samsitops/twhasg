/**

TopHeaderComponent

@file top-header.component.ts

Description
Angular standalone component for the top header section containing contact info and social media links.

Features
Uses Angular RouterLink for internal navigation.

Links to phone, email, contact form, and social media icons.

Modular and reusable top header UI.

Usage
Add <app-top-header></app-top-header> to include in templates.

Recommendations
Keep styles in top-header.component.scss for separation of concerns.

Extend functionality by adding inputs or outputs if dynamic data needed.

© 2025 Dream Care DreamCare@gmail.com

GitHub: @DreamCare ▸ MIT Licensed
*/

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-top-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './top-header.component.html',
    styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent { }