import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // Lazy loading
  {path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},

  {path: '', pathMatch: 'full', redirectTo: 'catalog'},
  // {path: '**', pathMatch: 'full', redirectTo: 'notfound'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
