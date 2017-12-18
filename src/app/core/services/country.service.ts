import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

interface Country {
  translations: {
    fr: string;
  };
}

@Injectable()
export class CountryService {

  private readonly url = 'https://restcountries.eu/rest/v2/name/';

  constructor(private httpClient: HttpClient) { }

  search(name: string): Observable<string[]> {
    name = name && name.trim();
    if (name && name.length >= 2) {
      return this.httpClient.get<Country[]>(this.url + name)
        .pipe(
          map(countries =>
            countries.map(country => country.translations.fr)
          ),
          catchError(error => of([]))
        );
    }
    return of([]);
  }

}
