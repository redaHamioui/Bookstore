import {Component, ContentChild, Host, Input, OnInit, Optional, SkipSelf, ViewEncapsulation} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgModel) private ngModel: NgModel;
  @ContentChild(NgControl) private ngControl: NgControl;
  get control() {
    return this.ngModel || this.ngControl;
  }

  get form() {
    return this.ngForm || this.formGroupDir;
  }

  constructor(@Optional() private ngForm: NgForm,
              @Optional() private formGroupDir: FormGroupDirective) { }

  ngOnInit() {
  }

}
