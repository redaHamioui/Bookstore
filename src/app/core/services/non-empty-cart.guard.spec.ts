import { TestBed, async, inject } from '@angular/core/testing';

import { NonEmptyCartGuard } from './non-empty-cart.guard';

describe('NonEmptyCartGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonEmptyCartGuard]
    });
  });

  it('should ...', inject([NonEmptyCartGuard], (guard: NonEmptyCartGuard) => {
    expect(guard).toBeTruthy();
  }));
});
