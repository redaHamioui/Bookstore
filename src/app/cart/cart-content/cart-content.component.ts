import {Component, LOCALE_ID, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class CartContentComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}
