/**

@file why-choose-us.component.ts

@description

Angular standalone component for the "Why Choose Us" section.

Utilizes RouterLink for internal navigation links.

@component

Selector: app-why-choose-us

Standalone: true

Imports: RouterLink from @angular/router

Template URL: './why-choose-us.component.html'

Style URL: './why-choose-us.component.scss'

@usage

Use <app-why-choose-us></app-why-choose-us> to embed this section.

© 2025 Dream Care DreamCare@gmail.com

GitHub: @DreamCare ▸ MIT Licensed
*/

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-why-choose-us',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './why-choose-us.component.html',
    styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent { }