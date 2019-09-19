import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../core-module/services/utility-service/utility.service';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../shared-module/components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  flexiConfig = {
    items: [
      {
        field: "personName",
        label: "Person's Name",
        input: "text",
        value:"",
        validation :{
          required : true
        }
      },
      {
        field: "states",
        label: "Person's state",
        input: "dropdown",
        value:"",
        validation :{
          required : true
        },
        options: [
          {
            label: "Tamil Nadu",
            value: "tamilNadu"
          },
          {
            label: "Odisha",
            value: "odisha"
          }
        ]
      },
      {
        field: "gender",
        label: "Gender",
        value:"",
        input: "radio",
        validation :{
          required : true
        },
        options: [
          {
            label: "Male",
            value: "male"
          },
          {
            label: "Female",
            value: "female"
          }
        ]
      },
      {
        field: "phoneNumber",
        label: "Phone NUMBER",
        value:"",
        input: "number",
        validation :{
          required : true
        }
      },
    ]
  };
  genericForm: FormGroup;
  answerForm: any;

  // objectKeys = Object.keys;

  constructor( private utils : UtilityService) { }

  ngOnInit() {
    this.genericForm = this.utils.toGroup(this.flexiConfig.items);
    console.log(this.genericForm)
  }
  keysOfObject(obj){
    return Object.keys(obj);
  }
  onSubmit(){

    this.answerForm = this.genericForm.getRawValue();
    console.log(this.answerForm)
  }
}
