/** 
|--------------------------------------------------------------------------
| Form Validation Service Documentation
|--------------------------------------------------------------------------
|
| Angular form validation utility service
|
| CORE FUNCTIONALITY
| 1. Global Validation:
|    - Recursive form control marking
|    - Supports nested FormGroups
|    - Touch triggering for error display
|
| 2. Methods:
|    - validateAllFormFields(formGroup)
|      • Marks all controls as touched
|      • Depth-first recursion
|      • No return value (side-effect only)
|
| SECURITY CONSIDERATIONS
| 1. Data Exposure:
|    - No sensitive data handling
|    - Validation states only affect UI
| 2. Risks:
|    - Potential infinite recursion with circular references
|    - No validation logic bypass protection
|
| BEST PRACTICE IMPROVEMENTS
| 1. Enhanced Validation:
|    - Add FormArray support
|    - Implement control disable handling
|    - Add error aggregation return
|
| 2. Type Safety:
|    - Implement generic FormGroup typing
|    - Add null checks for controls
|
| 3. Performance:
|    - Add cycle detection
|    - Implement bail-out thresholds
|
| MAINTENANCE GUIDELINES
| 1. Angular Updates:
|    - Monitor AbstractControl changes
|    - Track FormGroup API updates
|
| 2. Feature Additions:
|    - Add validation error logger
|    - Implement dirty state control
|
| 3. Error Handling:
|    - Add try/catch blocks
|    - Implement error callbacks
|
| VERSION COMPATIBILITY
| Angular: ≥14.0.0 (Reactive Forms)
| TypeScript: ≥4.6.4
| Last Updated: 2023-11-07
|
| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/

import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateFormService {
  constructor() { }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      let control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
