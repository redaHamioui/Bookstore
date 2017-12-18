import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../core/app-validators';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {CountryService} from '../../core/services/country.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cart-order-reactive',
  templateUrl: './cart-order-reactive.component.html',
  styleUrls: ['./cart-order-reactive.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CartOrderReactiveComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  sameAddress: FormControl;

  countries$: Observable<string[]>;

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
  isDisabled() {
    return this.submitted && this.form.invalid;
  }
  hasBillingAddress() {
    return !this.sameAddress.value;
  }
  updateBillingAddress() {
    if (this.hasBillingAddress()) {
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }
  constructor(private fb: FormBuilder,
              private country: CountryService) {}
  ngOnInit() {
    // this.identity = new FormGroup({
    //   firstname: new FormControl(),
    //   lastname: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(2)
    //   ]),
    //   email: new FormControl(),
    //   phone: new FormControl(),
    // });
    // this.shipping = new FormGroup({
    //   street: new FormControl(),
    //   zipcode: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^[0-9]{4,5}$/)
    //   ]),
    //   city: new FormControl('', [
    //     Validators.required,
    //   ]),
    //   country: new FormControl(),
    // });
    // this.form = new FormGroup({
    //   identity: this.identity,
    //   shipping: this.shipping,
    // });
    this.identity = this.fb.group({
      firstname: '',
      lastname: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      email: ['', [
        AppValidators.email('gmail.com')
      ]],
      phone: '',
    });
    this.shipping = this.buildAddress();
    this.billing = this.buildAddress();
    this.sameAddress = this.fb.control(true);
    this.form = this.fb.group({
      identity: this.identity,
      shipping: this.shipping,
      sameAddress: this.sameAddress,
    });
    this.updateBillingAddress();
    this.form.patchValue({
      identity: {
        firstname: 'Thierry',
        lastname: 'Chatel',
      },
      shipping: {
        city: 'Lunel',
      }
    });
    this.countries$ = this.shipping.controls['country'].valueChanges
      .pipe(...this.getOperators());
  }
  getOperators() {
    return [
      // filter(text => text && text.trim().length >= 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((name: string) => this.country.search(name))
    ];
  }

  buildAddress() {
    return this.fb.group({
      street: '',
      zipcode: ['', [
        Validators.required,
        AppValidators.zipcode
      ]],
      city: ['', [
        Validators.required,
      ]],
      country: '',
    });
  }

}
