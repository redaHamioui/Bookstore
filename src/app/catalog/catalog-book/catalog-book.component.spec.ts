import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBookComponent } from './catalog-book.component';

describe('CatalogBookComponent', () => {
  let component: CatalogBookComponent;
  let fixture: ComponentFixture<CatalogBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
