import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../model/book.model';
import {map, shareReplay} from 'rxjs/operators';

export const catalogUrl = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
export const catalogApiKey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  private list$: Observable<Book[]>;

  constructor(private httpClient: HttpClient) {
    const url = catalogUrl + catalogApiKey;
    this.list$ = this.httpClient.get<Book[]>(url)
      .pipe(
        shareReplay(1)
      );
  }

  getList(): Observable<Book[]> {
     return this.list$;
  }

  getBook(id: string): Observable<Book> {
    return this.list$
      .pipe(
        map(list => list.filter(book => book._id.$oid === id)[0])
      );
  }

}
