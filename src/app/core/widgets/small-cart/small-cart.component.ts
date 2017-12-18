import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SmallCartComponent implements OnInit {

  constructor(public cart: CartService) { }

  ngOnInit() {
  }

}
