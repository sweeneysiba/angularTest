import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({

  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() genericData : any ;
  @Input() genericForm :FormGroup;

  constructor() { 
  }

  ngOnInit() {
  } 
}
