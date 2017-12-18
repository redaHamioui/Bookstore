import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {AppValidators} from '../app-validators';

@Directive({
  selector: '[zipcode]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: AppValidators.zipcode,
      multi: true
    }
  ]
})
export class ZipcodeValidationDirective {

  constructor() { }

}
