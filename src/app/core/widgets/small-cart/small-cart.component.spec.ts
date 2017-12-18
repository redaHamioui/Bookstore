import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCartComponent } from './small-cart.component';
import {CartService} from '../../services/cart.service';
import {By} from '@angular/platform-browser';
import {book1, book2} from '../../model/book.model.spec';
import {CartRow} from '../../model/cart-row.model';

describe('SmallCartComponent', () => {
  let component: SmallCartComponent;
  let fixture: ComponentFixture<SmallCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCartComponent ],
      providers: [CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display an empty cart', () => {
    const images = fixture.debugElement
      .queryAll(By.css('img'));
    expect(images.length).toEqual(1);
    expect(images[0].nativeElement.src).toContain('cart-empty');
  });

  it('should display a loaded cart', () => {
    const cart: CartService = TestBed.get(CartService);
    cart.rows = [
      new CartRow(book1, 1),
      new CartRow(book2, 2),
    ];
    fixture.detectChanges();
    const images = fixture.debugElement
      .queryAll(By.css('img'));
    expect(images.length).toEqual(1);
    expect(images[0].nativeElement.src).toContain('cart-loaded');
  });

});
