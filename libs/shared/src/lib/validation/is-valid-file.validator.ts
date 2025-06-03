/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

import { IFile } from '../types';

@ValidatorConstraint({ async: true })
export class IsValidFileConstraint implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(file: IFile, args: ValidationArguments): boolean {
    if (!file) return true; // Skip validation if file is not provided (optional field)
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    return allowedMimeTypes.includes(file.mimetype);
  }

  defaultMessage(args: ValidationArguments): string {
    return 'File type is not valid. Allowed types are JPEG, PNG, and PDF.';
  }
}

export function IsValidFile(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidFileConstraint,
    });
  };
}
