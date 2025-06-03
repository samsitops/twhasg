import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateFormService } from '../../../shared/services/validate-form.service';

@Component({
    selector: 'app-select-options',
    standalone: false,
    templateUrl: './select-options.component.html',
    styleUrl: './select-options.component.scss',
})
export class SelectOptionsComponent {
    form: FormGroup = new FormGroup({});
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private validateFormService: ValidateFormService
    ) {}
    ngOnInit(): void {
        this.form = this.fb.group({
            service: [''],
        });
        this.route.queryParams.subscribe((params) => {
            this.form.patchValue({ service: params['service'] });
        });
    }
    setService(): void {
        if (this.form.invalid) {
            return this.validateFormService.validateAllFormFields(this.form);
        }
        this.router.navigate(['/request-appointment/forWho'], {
            queryParams: { service: this.form.value.service },
        });
    }
}
