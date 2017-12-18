import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActionService} from '../../services/action.service';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderButtonComponent implements OnInit {

  constructor(public action: ActionService) { }

  ngOnInit() {
  }

}
