import { Injectable } from '@angular/core';
import {CartRow} from '../model/cart-row.model';
import {Book} from '../model/book.model';

@Injectable()
export class CartService {
  rows: CartRow[] = [];

  add(book: Book, quantity: number = 1) {
    const found = this.rows.filter(row => row.book._id.$oid === book._id.$oid)[0];
    if (found) {
      found.quantity += quantity;
    } else {
      this.rows.push(new CartRow(book, quantity));
    }
  }
  totalPrice(): number {
    return this.rows
      .map(row => row.amount())
      .reduce((total, value) => total + value, 0);
  }
  itemCount(): number {
    return this.rows
      .map(row => row.quantity)
      .reduce((total, value) => total + value, 0);
  }
  removeRow(row: CartRow): void {
    this.rows = this.rows.filter(r => r !== row);
  }

  isEmpty() {
    return this.rows.length === 0;
  }

  constructor() {
  }

}
