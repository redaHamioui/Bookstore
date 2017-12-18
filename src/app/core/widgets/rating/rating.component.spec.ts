import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';

@Component({
  template: '<app-rating [(value)]="rating"></app-rating>'
})
class ParentComponent {
  rating = 0;
}

describe('RatingComponent', () => {
  let parentComponent: ParentComponent;
  let parentFixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent, ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(ParentComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
  });

  it('should display stars', () => {
    parentComponent.rating = 3;
    parentFixture.detectChanges();
    const fullStars = parentFixture.debugElement.queryAll(By.css('.star-full'));
    expect(fullStars.length).toEqual(3);
  });

  it('should change rating', () => {
    const stars = parentFixture.debugElement.queryAll(By.css('.star'));
    expect(stars.length).toEqual(5);
    stars[1].triggerEventHandler('click', null);
    parentFixture.detectChanges();
    expect(parentComponent.rating).toEqual(2);
  });

});
