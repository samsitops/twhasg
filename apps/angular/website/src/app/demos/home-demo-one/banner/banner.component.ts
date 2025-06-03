/**
 * @component BannerComponent
 * @description
 * This component displays the main homepage banner slider using `ngx-owl-carousel-o`.
 * It includes three promotional slides with custom animations, background images, and CTA buttons.
 *
 * @features
 * - Uses Owl Carousel for animated slide transitions
 * - Responsive and mobile-friendly
 * - Navigation arrows and pagination dots enabled
 * - Auto-play with pause on hover
 *
 * @carouselOptions
 * - items: Shows one item at a time
 * - nav: Shows left/right arrows
 * - loop: Enables infinite looping
 * - dots: Shows navigation dots
 * - autoplay: Slides rotate automatically
 * - smartSpeed: Smooth transition speed (1000ms)
 * - animateIn/Out: Fade animations for entry/exit
 * - navText: Uses `icofont` icons for nav buttons
 *
 * @dependencies
 * - ngx-owl-carousel-o
 * - icofont (for navigation icons)
 */


import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [RouterLink, CarouselModule],
	templateUrl: './banner.component.html',
	styleUrl: './banner.component.scss'
})
export class BannerComponent {

	bannerSlides: OwlOptions = {
		items: 1,
		nav: true,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		]
	}

}