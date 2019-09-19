import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilityService } from './services/utility-service/utility.service';
@NgModule({
  declarations: [],
  imports: [ ],
  providers: [],
  exports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [UtilityService]
    };
  }
}
