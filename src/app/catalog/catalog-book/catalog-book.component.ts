import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CatalogService} from '../../core/services/catalog.service';
import {Book} from '../../core/model/book.model';
import {Observable} from 'rxjs/Observable';
import {switchMap, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogBookComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute,
              private catalog: CatalogService,
              private title: Title) { }

  ngOnInit() {
    this.book$ = this.route.params
      .pipe(
        switchMap(params =>
          this.catalog.getBook(params['id'])
        ),
        tap(book =>
          this.title.setTitle('Livre: ' + book.title)
        )
      );
  }

}
