/**

| SidebarComponent

@file sidebar.component.ts

Description
Sidebar component displaying nested navigation menus using ngx-bootstrap accordion.

It includes service categories and videos data and emits an event when the sidebar should close.

Features
Uses standalone component with necessary Angular and third-party imports.

Displays nested accordion menus for service navigation.

Emits closeSidebarEvent when a sidebar item is clicked to trigger sidebar close in parent.

Inputs / Outputs
@Output() closeSidebarEvent: EventEmitter<void> — emits when sidebar close action is triggered.

Dependencies
Angular CommonModule and RouterModule for routing and common directives.

ngx-bootstrap Accordion components for collapsible menu UI.

External data sources: services and videos from shared constants.

Usage Example
<app-sidebar (closeSidebarEvent)="onSidebarClose()"></app-sidebar>

© 2025 Dream Care DreamCare@gmail.com

GitHub: @DreamCare ▸ MIT Licensed

*/


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { RouterModule } from '@angular/router';
import {
    AccordionComponent,
    AccordionPanelComponent,
} from 'ngx-bootstrap/accordion';
import { services } from '../../shared/consts/services';
import { videos } from '../../shared/consts/videos';
@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        AccordionComponent,
        AccordionPanelComponent,
        RouterModule,
        CommonModule,
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
    services = services;
    videos = videos;
    @Output() closeSidebarEvent = new EventEmitter<void>();

    closeSidebar() {
        this.closeSidebarEvent.emit();
    }
}
