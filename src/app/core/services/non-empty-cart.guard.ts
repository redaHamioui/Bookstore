import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {CartService} from './cart.service';

@Injectable()
export class NonEmptyCartGuard implements CanActivate {

  constructor(private cart: CartService) {
  }

  canActivate(): boolean {
    return !this.cart.isEmpty();
  }

}
