import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {book1, book2} from '../model/book.model.spec';
import {CartRow} from '../model/cart-row.model';

describe('CartService', () => {
  let cart: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });
  beforeEach(() => {
    cart = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(cart).toBeTruthy();
  });

  it('should add two different books', () => {
    cart.add(book1, 1);
    cart.add(book2, 2);
    expect(cart.rows).toEqual([
      new CartRow(book1, 1),
      new CartRow(book2, 2),
    ]);
  });

  it('should add two different books', () => {
    cart.add(book1, 1);
    cart.add(book1, 2);
    expect(cart.rows).toEqual([
      new CartRow(book1, 3),
    ]);
  });


  it('should remove a row', () => {
    cart.rows = [
      new CartRow(book1, 1),
      new CartRow(book2, 2),
    ];
    cart.removeRow(cart.rows[0]);
    expect(cart.rows).toEqual([
      new CartRow(book2, 2),
    ]);
  });

});
