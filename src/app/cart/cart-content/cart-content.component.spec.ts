import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContentComponent } from './cart-content.component';
import {CartService} from '../../core/services/cart.service';
import {book1} from '../../core/model/book.model.spec';
import {CartRow} from '../../core/model/cart-row.model';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {OrderButtonComponent} from '../../core/widgets/order-button/order-button.component';
import {ActionService} from '../../core/services/action.service';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[routerLink]',
})
class MockRouterLinkDirective {
  @Input() routerLink: string | string[];
}

fdescribe('CartContentComponent', () => {
  let component: CartContentComponent;
  let fixture: ComponentFixture<CartContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        CartContentComponent,
        OrderButtonComponent,
        MockRouterLinkDirective
      ],
      providers: [
        CartService,
        {
          provide: ActionService,
          useValue: jasmine.createSpyObj(['orderCart'])
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display cart rows', (done) => {
    const cart: CartService = TestBed.get(CartService);
    cart.rows = [
      new CartRow(book1, 1)
    ];
    fixture.detectChanges();
    const rows = fixture.debugElement
      .queryAll(By.css('.cart-row'));
    const title = rows[0].query(By.css('.cart-title'));
    expect(title.nativeElement.textContent).toEqual('Abc');
    fixture.whenStable().then(() => {
      const quantity = rows[0].query(By.css('.cart-quantity input'));
      expect(quantity.nativeElement.value).toEqual('1');
      done();
    });
  });
});
