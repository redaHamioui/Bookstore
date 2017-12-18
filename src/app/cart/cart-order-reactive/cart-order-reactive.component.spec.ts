import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderReactiveComponent } from './cart-order-reactive.component';

describe('CartOrderReactiveComponent', () => {
  let component: CartOrderReactiveComponent;
  let fixture: ComponentFixture<CartOrderReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
