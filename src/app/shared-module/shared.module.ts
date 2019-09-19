import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownFieldComponent } from './components/dropdown-field/dropdown-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatCardModule, MatTooltipModule, MatDatepickerModule, MatAutocompleteModule, MatTableModule, MatChipsModule } from '@angular/material';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core-module/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SelectFieldComponent } from './components/select-field/select-field.component';
@NgModule({
  declarations: [
    DynamicFormComponent,
    TextFieldComponent,
    DropdownFieldComponent,
    NumberFieldComponent,
    TextareaFieldComponent,
    SelectFieldComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    MatChipsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    RouterModule,
    CoreModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatIconModule

  ],
  entryComponents: [],
  exports: [
    DynamicFormComponent,
    MatTooltipModule,
  ]

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
