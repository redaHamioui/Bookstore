import { TestBed, inject } from '@angular/core/testing';

import {catalogApiKey, CatalogService, catalogUrl} from './catalog.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {book1, book2} from '../model/book.model.spec';

describe('CatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatalogService]
    });
  });

  it('should be created', (done) => {
    const catalog: CatalogService = TestBed.get(CatalogService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    catalog.getList().subscribe(result => {
      expect(result).toEqual([book1, book2]);
      done();
    });
    const req = httpMock.expectOne(catalogUrl + catalogApiKey);
    req.flush([book1, book2]);
  });
});
