import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Book} from './model/book.model';

export class AppValidators {

  static zipcode(control: AbstractControl): ValidationErrors | null {
    const pattern = /^[0-9]{4,5}$/;
    if (control.value && !pattern.test(control.value)) {
      return {zipcode: true};
    }
    return null;
  }

  static email(requiredDomain?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (control.value) {
        if (!pattern.test(control.value)) {
          return {email: true};
        }
        if (requiredDomain) {
          // const actualDomain = control.value.split('@')[1];
          const [, actualDomain] = control.value.split('@');
          if (actualDomain !== requiredDomain) {
            return {
              domain: {actualDomain, requiredDomain}
            };
          }
        }
      }
      return null;
    };
  }

}

