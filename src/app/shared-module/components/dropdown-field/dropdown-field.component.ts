import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {
@Input()genericData;
@Input()genericForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
