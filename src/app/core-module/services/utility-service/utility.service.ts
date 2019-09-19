import { Injectable } from '@angular/core';

import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _formBuilder: FormBuilder) {
  }

  toGroup(inputs) {
    let group: any = {};
    inputs.forEach(inputs => {
      group[inputs.field] = inputs.validation.required ? new FormControl(inputs.value || '', Validators.required)
      : new FormControl(inputs.value || '');
    });
    return new FormGroup(group);
  }


}
