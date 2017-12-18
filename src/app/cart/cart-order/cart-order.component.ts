import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CartOrderComponent implements OnInit {

  @ViewChild('formInfo') formInfo: NgForm;

  data = {
    identity: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    sameAddress: true
  };

  save() {
    if (this.formInfo.valid) {
      console.log('save:', this.data);
    }
  }

  log() {
    console.log(this.formInfo);
  }

  constructor() { }

  ngOnInit() {
  }

}
