import { TestBed, inject } from '@angular/core/testing';

import { ActionService } from './action.service';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {book1} from '../model/book.model.spec';

describe('ActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActionService,
        {
          provide: CartService,
          useValue: jasmine.createSpyObj(['add'])
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj(['navigate'])
        },
      ]
    });
  });

  it('should be created', () => {
    const action: ActionService = TestBed.get(ActionService);
    const cart: CartService = TestBed.get(CartService);
    const router: Router = TestBed.get(Router);

    action.buyBook(book1);
    expect(cart.add).toHaveBeenCalled();
    expect(cart.add).toHaveBeenCalledTimes(1);
    expect(cart.add).toHaveBeenCalledWith(book1);
    expect(router.navigate).toHaveBeenCalledWith(['/cart/content']);
    expect(cart.add)['toHaveBeenCalledBefore'](router.navigate);
  });
});
