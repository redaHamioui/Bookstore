import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit {

  private _value: number;
  @Input() set value(rating: number) {
    this._value = rating;
    this.stars = [1, 2, 3, 4, 5]
      .map(i => i <= rating);
  }
  get value(): number {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<number>();

  stars: boolean[];

  onClick(index: number): void {
    this.valueChange.emit(index + 1);
    console.log(this.value);
  }

  constructor() {
  }
  ngOnInit() {
  }

  log() {
    console.log('refresh');
  }
}
