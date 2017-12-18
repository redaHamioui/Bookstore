import {book1} from './book.model.spec';
import {CartRow} from './cart-row.model';

describe('CartRow class', () => {

  it('should compute row amount', () => {
    const cartRow1 = new CartRow(book1, 1);
    expect(cartRow1.amount()).toBeCloseTo(10.10, 2);
    const cartRow2 = new CartRow(book1, 2);
    expect(cartRow2.amount()).toBeCloseTo(20.20, 2);
    const cartRow3 = new CartRow(book1, 3);
    expect(cartRow3.amount()).toBeCloseTo(30.30, 2);
  });

});
