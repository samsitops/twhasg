/**
 * PatientStatusComponent manages the patient status form within the appointment request workflow.
 * 
 * It allows the user to specify whether they (or another member) have previously received care at TeamWork Health,
 * and if so, to provide the name of their previous care provider.
 * 
 * Key functionalities include:
 * - Initializing and patching the form with query parameters on component load.
 * - Dynamically validating the "previousProvider" field based on the "receivedCare" radio selection.
 * - Navigating to the next step in the appointment request process with updated query parameters upon form submission.
 */


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateFormService } from '../../../shared/services/validate-form.service';

@Component({
    selector: 'app-patient-status',
    standalone: false,
    templateUrl: './patient-status.component.html',
    styleUrl: './patient-status.component.scss',
})
export class PatientStatusComponent {
    forWho: any;
    params: any;
    isPreviousProvider: boolean = false;
    form: FormGroup = new FormGroup({});
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private validateFormService: ValidateFormService
    ) { }
    ngOnInit(): void {
        this.form = this.fb.group({
            previousProvider: [''],
            receivedCare: [true, Validators.required],
        });
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            this.params = params;
            this.form.patchValue({
                previousProvider: params['previousProvider'],
                receivedCare: params['receivedCare'] == 'true' ? true : false,
            });
        });
    }
    checkValidity() {
        if (this.form.get('receivedCare')?.value == true) {
            this.form
                .get('previousProvider')
                ?.setValidators(Validators.required);
        } else {
            this.form.get('previousProvider')?.clearValidators();
        }
        this.form.get('previousProvider')?.updateValueAndValidity();
    }
    submit() {
        if (this.form.invalid) {
            return this.validateFormService.validateAllFormFields(this.form);
        }
        this.router.navigate(['/request-appointment/care-provider'], {
            queryParams: {
                whom: this.params['whom'],
                service: this.params['service'],
                previousProvider: this.form.value.receivedCare
                    ? this.form.value.previousProvider
                    : '',
                receivedCare: this.form.value.receivedCare,
                selectedRelation: this.params['selectedRelation'],
                memberName: this.params['memberName'],
            },
        });
    }
}
