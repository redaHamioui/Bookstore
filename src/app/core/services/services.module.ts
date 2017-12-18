import {NgModule} from '@angular/core';
import {CatalogService} from './catalog.service';
import {CartService} from './cart.service';
import {ActionService} from './action.service';
import {NonEmptyCartGuard} from './non-empty-cart.guard';
import {CountryService} from './country.service';

@NgModule({
  providers: [
    CatalogService,
    CartService,
    ActionService,
    NonEmptyCartGuard,
    CountryService,
  ]
})
export class ServicesModule { }
