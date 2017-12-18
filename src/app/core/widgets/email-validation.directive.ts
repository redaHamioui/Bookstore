import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AppValidators} from '../app-validators';

@Directive({
  selector: 'input[type=email]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true
    }
  ]

})
export class EmailValidationDirective implements Validator {
  @Input() domain: string;

  validate(control: AbstractControl): ValidationErrors {
    return AppValidators.email(this.domain)(control);
  }

  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error("Method not implemented.");
  }

  constructor() { }

}
