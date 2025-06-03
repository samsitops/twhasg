/** 
|--------------------------------------------------------------------------
| Application Routing Configuration
|--------------------------------------------------------------------------
|
| Angular router configuration for medical platform
|
| CORE FUNCTIONALITY
| 1. Public Routes:
|    - Home: 2nd demo variant
|    - Content: Blog/FAQ/Research
|    - Services: Departments/Providers
|    - Authentication: Login/Register
|
| 2. Protected Features:
|    - Appointment System (Lazy-loaded)
|    - Provider Portal
|    - Patient Referral
|
| 3. Technical Routes:
|    - Error Handling: 404 page
|    - Policy Documents: Privacy/Terms
|    - Media Content: Video library
|
| SECURITY CONSIDERATIONS
| 1. Authentication:
|    - /login and /register exposed
|    - No route guards implemented
|
| 2. Data Protection:
|    - Policy routes (privacy-policy, terms-conditions)
|    - Parameterized routes require sanitization
|    - Error page prevents stack traces
|
| BEST PRACTICE IMPROVEMENTS
| 1. Route Optimization:
|    - Remove commented demo routes
|    - Implement route guards for protected paths
|    - Add role-based access control
|
| 2. SEO Enhancements:
|    - Add canonical URLs
|    - Implement route meta tags
|    - Enable preloading strategy
|
| 3. Maintenance:
|    - Standardize slug patterns
|    - Version route parameters
|    - Add route change analytics
|
| MAINTENANCE GUIDELINES
| 1. Adding Routes:
|    - Follow existing parameter patterns (:slug/:category)
|    - Maintain error route as last entry
|    - Use lazy loading for new features
|
| 2. Modifying Routes:
|    - Update service-details path structure
|    - Maintain backward compatibility
|    - Audit all route references
|
| 3. Deprecation:
|    - Remove commented demo components
|    - Add redirects for changed paths
|    - Maintain route version history
|
| VERSION COMPATIBILITY
| Angular Router: ≥15.0
| TypeScript: ≥4.8
| Lazy Loading: Webpack 5+
| Last Updated: 2023-11-07
|
| ACCESSIBILITY
| - Ensure all components implement ARIA
| - Verify screen reader navigation
| - Audit focus management
|
| PERFORMANCE
| - Lazy-loaded Appointment Module
| - Eager-loaded core components
| - No prefetching strategy
|
| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/


import { Routes } from '@angular/router';
import { ResearchDetailsComponent } from './common/research-details/research-details.component';
import { HomeDemoTwoComponent } from './demos/home-demo-two/home-demo-two.component';
import { AboutUsPageComponent } from './inner-pages/about-us-page/about-us-page.component';
import { AppointmentPageComponent } from './inner-pages/appointment-page/appointment-page.component';
import { BlogDetailsPageComponent } from './inner-pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './inner-pages/blog-page/blog-page.component';
import { ContactUsPageComponent } from './inner-pages/contact-us-page/contact-us-page.component';
import { DepartmentsPageComponent } from './inner-pages/departments-page/departments-page.component';
import { DoctorDetailsPageComponent } from './inner-pages/doctor-details-page/doctor-details-page.component';
import { DoctorsPageComponent } from './inner-pages/doctors-page/doctors-page.component';
import { ErrorPageComponent } from './inner-pages/error-page/error-page.component';
import { FaqPageComponent } from './inner-pages/faq-page/faq-page.component';
import { LoginPageComponent } from './inner-pages/login-page/login-page.component';
import { PrivacyPolicyPageComponent } from './inner-pages/privacy-policy-page/privacy-policy-page.component';
import { ProviderPortalComponent } from './inner-pages/provider-portal/provider-portal.component';
import { ReferPatientComponent } from './inner-pages/refer-patient/refer-patient.component';
import { RegisterPageComponent } from './inner-pages/register-page/register-page.component';
import { ServiceDetailsPageComponent } from './inner-pages/service-details-page/service-details-page.component';
import { ServicesPageComponent } from './inner-pages/services-page/services-page.component';
import { TermsConditionsPageComponent } from './inner-pages/terms-conditions-page/terms-conditions-page.component';
import { VideoDetailsComponent } from './inner-pages/video-details/video-details.component';

export const routes: Routes = [
  // {path: '', component: HomeDemoOneComponent},
  { path: '', component: HomeDemoTwoComponent },
  // {path: 'index-3', component: HomeDemoThreeComponent},
  { path: 'about', component: AboutUsPageComponent },
  { path: 'appointment', component: AppointmentPageComponent },
  { path: 'departments', component: DepartmentsPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog-details/:slug', component: BlogDetailsPageComponent },
  { path: 'doctors', component: DoctorsPageComponent },
  { path: 'doctor-details', component: DoctorDetailsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  // { path: 'service-details', component: ServiceDetailsPageComponent },
  {
    path: 'service-details/:category/:slug',
    component: ServiceDetailsPageComponent,
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
  { path: 'terms-conditions', component: TermsConditionsPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'contact', component: ContactUsPageComponent },
  { path: 'video-details/:slug/:category', component: VideoDetailsComponent },
  { path: 'research-details', component: ResearchDetailsComponent },
  // { path: 'library/:slug', component: LibraryComponent },
  { path: 'partnerships', component: ProviderPortalComponent },
  { path: 'refer-patient', component: ReferPatientComponent },
  // Here add new pages component
  {
    path: 'request-appointment',
    loadChildren: () =>
      import('./inner-pages/appointment/appointment.module').then(
        (m) => m.AppointmentModule,
      ),
  },

  { path: '**', component: ErrorPageComponent }, // This line will remain down from the whole pages component list
];
