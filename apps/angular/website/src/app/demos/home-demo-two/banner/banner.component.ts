/**
 * BANNER COMPONENT
 * 
 * Purpose:
 * Displays a responsive hero carousel banner with:
 * - Full-width sliding content
 * - Auto-play functionality
 * - Navigation controls
 * - Mobile-optimized behavior
 * 
 * Features:
 * - Owl Carousel integration
 * - Custom navigation icons
 * - Responsive breakpoints
 * - Smooth transitions
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [RouterLink, CarouselModule],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
})
export class BannerComponent {
    /**
    * Owl Carousel Configuration
    * 
    * Options:
    * - items: 1          => Single slide visible
    * - loop: true        => Infinite loop
    * - autoplay: true    => Auto-rotate slides
    * - nav: true         => Show navigation arrows
    * - dots: true        => Show pagination dots
    * 
    * Responsive Breakpoints:
    * 0px    : Mobile (single item, no nav arrows)
    * 600px  : Tablet (show nav arrows)
    * 1000px : Desktop (full navigation)
    */
    bannerSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-simple-left'></i>",
            "<i class='icofont-simple-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
            },
        },
    };
}
