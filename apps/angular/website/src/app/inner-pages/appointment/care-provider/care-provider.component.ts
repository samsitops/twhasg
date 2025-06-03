/**
 * CareProviderComponent
 * 
 * This component handles the form where the user specifies their primary care provider.
 * It includes a required text input for the provider's name, which can be optionally 
 * disabled if the user indicates they do not have a primary care provider via a checkbox.
 * 
 * Features:
 * - Reactive form with validation on the 'primaryCareProvider' input.
 * - Dynamically toggles the 'required' validator based on the checkbox state.
 * - Retrieves query parameters from the route to preserve context.
 * - On successful form submission, navigates to the next step passing collected data via query parameters.
 * 
 * Properties:
 * - form: FormGroup instance managing the form controls and validation.
 * - ProviderRequired: boolean flag to track whether the provider input is mandatory.
 * - params: stores the current route's query parameters.
 * 
 * Methods:
 * - ngOnInit(): Initializes the form and subscribes to route query parameters.
 * - changeValidity(event): Enables or disables the 'required' validator depending on checkbox status.
 * - Submit(): Validates the form and navigates to the next page with necessary query params.
 */


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateFormService } from '../../../shared/services/validate-form.service';

@Component({
    selector: 'app-care-provider',
    standalone: false,
    templateUrl: './care-provider.component.html',
    styleUrl: './care-provider.component.scss',
})
export class CareProviderComponent {
    params: any;
    form: FormGroup = new FormGroup({});
    ProviderRequired: boolean = true;
    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router,
        private validateFormService: ValidateFormService
    ) { }
    ngOnInit(): void {
        this.form = this.fb.group({
            primaryCareProvider: ['', Validators.required],
        });
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            this.params = params;
        });
    }
    changeValidity(event: any) {
        if (event.target.checked) {
            this.form.get('primaryCareProvider')?.clearValidators();
            this.form.get('primaryCareProvider')?.updateValueAndValidity();
            console.log(this.form);
        } else {
            this.form
                .get('primaryCareProvider')
                ?.setValidators(Validators.required);
            this.form.get('primaryCareProvider')?.updateValueAndValidity();
        }
    }
    Submit() {
        if (this.form.invalid) {
            return this.validateFormService.validateAllFormFields(this.form);
        }
        this.router.navigate(['/request-appointment/form'], {
            queryParams: {
                whom: this.params['whom'],
                service: this.params['service'],
                previousProvider: this.params['previousProvider'],
                receivedCare: this.params['receivedCare'],
                status: this.params['status'],
                primaryCareProvider: this.ProviderRequired
                    ? this.form.value['primaryCareProvider']
                    : '',
                selectedRelation: this.params['selectedRelation'],
                memberName: this.params['memberName'],
            },
        });
    }
}
