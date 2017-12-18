import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../core/model/book.model';
import {Title} from '@angular/platform-browser';
import {CartService} from '../../core/services/cart.service';
import {Router} from '@angular/router';
import {ActionService} from '../../core/services/action.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CatalogListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private catalog: CatalogService,
              private title: Title) { }

  ngOnInit() {
    this.books$ = this.catalog.getList();
    this.title.setTitle('Catalogue des livres');
  }

}
