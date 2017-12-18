import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {

  @Input() control: NgModel;
  @Input() form: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
