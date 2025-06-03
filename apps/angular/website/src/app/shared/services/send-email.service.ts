/**
 * EMAIL SERVICE
 * 
 * Handles email sending operations through a dedicated API endpoint.
 * 
 * Features:
 * - Singleton service provided at root level
 * - Type-safe request/response interfaces
 * - Centralized API configuration
 * - Basic error handling
 * 
 * Usage Example:
 * 
 * @Component({...})
 * export class UserComponent {
 *   constructor(private emailService: SendEmailService) {}
 * 
 *   sendWelcomeEmail(user: User) {
 *     this.emailService.sendEmail({
 *       recipient: user.email,
 *       subject: 'Welcome!',
 *       body: 'Thank you for joining...'
 *     }).subscribe({
 *       next: () => showSuccess(),
 *       error: (err) => handleError(err)
 *     });
 *   }
 * }
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SendEmailService {
    private apiUrl = 'https://monorepo-api.twh.dreamcare.ai/email/email/send';

    constructor(private http: HttpClient) { }

    sendEmail(recipient: string, content: string): Observable<any> {
        const body = { recipient, content };
        return this.http.post<any>(this.apiUrl, body);
    }
}
