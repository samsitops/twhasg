/**
 * BlogPageComponent
 * 
 * This component displays a list of blog posts. It supports filtering blogs by category
 * based on the URL query parameter `category`.
 * 
 * Features:
 * - Loads blog data from a shared constant.
 * - Listens to query parameter changes to filter blogs dynamically.
 * - Uses Angular standalone component approach with imported common UI components.
 * 
 * Usage:
 * - Access the page with optional `?category=someCategory` query param to filter blogs.
 */


import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BackToTopComponent } from '../../common/back-to-top/back-to-top.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { InnerPageBannerComponent } from '../../common/inner-page-banner/inner-page-banner.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { blogs } from '../../shared/consts/blogs';

@Component({
    selector: 'app-blog-page',
    standalone: true,
    imports: [
        RouterLink,
        NavbarComponent,
        InnerPageBannerComponent,
        FooterComponent,
        BackToTopComponent,
        NgFor,
    ],
    templateUrl: './blog-page.component.html',
    styleUrl: './blog-page.component.scss',
})
export class BlogPageComponent {
    blogs = blogs;

    constructor(private _Router: ActivatedRoute) { }

    ngOnInit() {
        this._Router.queryParams.subscribe((params: any) => {
            if (params.category) {
                this.blogs = this.blogs.filter(
                    (blog) => blog.category == params.category
                );
                console.log(this.blogs);
            }
        });
    }
}
