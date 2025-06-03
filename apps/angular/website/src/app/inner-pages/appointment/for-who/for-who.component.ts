/**
 * ForWhoComponent handles the form for selecting whether the appointment
 * is for the user themselves or a family member.
 * 
 * Features:
 * - Initializes a reactive form with fields for appointment recipient (forWho),
 *   family member's name, and relationship.
 * - Subscribes to route query parameters to prefill form values and redirect if needed.
 * - Dynamically applies validation rules based on the selected option.
 * - Navigates to the next step in the appointment process with the collected data.
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateFormService } from '../../../shared/services/validate-form.service';

@Component({
    selector: 'app-for-who',
    standalone: false,
    templateUrl: './for-who.component.html',
    styleUrl: './for-who.component.scss',
})
export class ForWhoComponent {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private validateFormService: ValidateFormService
    ) { }
    service: string = '';
    selectedOption: string = '';
    form: FormGroup = new FormGroup({});
    ngOnInit(): void {
        this.form = this.fb.group({
            selectedRelation: ['Child'],
            memberName: [''],
            forWho: [''],
        });
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            this.form.patchValue({
                forWho: params['whom'],
                selectedRelation: params['selectedRelation'],
                memberName: params['memberName'],
            });
            this.checkForWho();
        });
        this.route.queryParams.subscribe((params) => {
            if (!params['service']) {
                this.router.navigate(['/request-appointment/select-options']);
            } else if (params['service']) {
                this.service = params['service'];
            }
        });
    }
    submitForm(): void {
        if (this.form.invalid) {
            return this.validateFormService.validateAllFormFields(this.form);
        }
        this.router.navigate(['/request-appointment/patient-status'], {
            queryParams: {
                service: this.service,
                whom: this.form.value.forWho,
                selectedRelation:
                    this.form.value.forWho == 'Family Member'
                        ? this.form.get('selectedRelation')?.value
                        : '',
                memberName:
                    this.form.value.forWho == 'Family Member'
                        ? this.form.get('memberName')?.value
                        : '',
            },
        });
    }
    checkForWho(): void {
        if (this.form.get('forWho')?.value === 'Family Member') {
            this.form.get('memberName')?.setValidators([Validators.required]);
            this.form
                .get('selectedRelation')
                ?.setValidators([Validators.required]);
        } else {
            this.form.get('memberName')?.clearValidators();
            this.form.get('selectedRelation')?.clearValidators();
        }
        this.form.get('memberName')?.updateValueAndValidity();
        this.form.get('selectedRelation')?.updateValueAndValidity();
    }
}
