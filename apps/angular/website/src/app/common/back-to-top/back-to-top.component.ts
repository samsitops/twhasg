/**
 * -----------------------------------------------------------------------------
 *  back-to-top.component.ts — Scroll-To-Top Button Component
 * -----------------------------------------------------------------------------
 *
 *  🚀 Description
 *  This standalone Angular component provides a "Back to Top" button that 
 *  becomes visible once the user scrolls beyond a specified threshold 
 *  (`topPosToStartShowing`). When clicked, it smoothly scrolls the page back 
 *  to the top, improving navigation in long content pages.
 *
 *  ✅ Features:
 *  • Listens to window scroll events to toggle button visibility.
 *  • Smooth scrolling behavior for user-friendly experience.
 *  • Standalone component leveraging Angular's modern APIs (no NgModule required).
 *
 *  🔧 Implementation Details:
 *  • Uses `@HostListener` to track scroll position.
 *  • Property `isShow` controls button display.
 *  • Scroll position threshold is configurable via `topPosToStartShowing`.
 *
 *  🔄 Usage:
 *  Simply add `<app-back-to-top></app-back-to-top>` in your templates.
 *
 * -----------------------------------------------------------------------------
 *  © 2025 Dream Care <DreamCare@gmail.com>
 *  GitHub: @DreamCare ▸ Licensed under the MIT License
 * -----------------------------------------------------------------------------
 */

import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-back-to-top',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './back-to-top.component.html',
    styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {

    /** Controls visibility of the back-to-top button */
    isShow: boolean = false;

    /** Scroll threshold (in pixels) for showing the button */
    topPosToStartShowing = 100;

    /**
     * Listens to window scroll events and toggles `isShow` based on
     * whether the scroll position exceeds `topPosToStartShowing`.
     */
    @HostListener('window:scroll')
    checkScroll() {
        const scrollPosition = window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop || 0;
        this.isShow = scrollPosition >= this.topPosToStartShowing;
    }

    /**
     * Scrolls the window smoothly back to the top.
     */
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

}
