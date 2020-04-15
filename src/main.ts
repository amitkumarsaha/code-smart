import './polyfills';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './app/material-module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmploymentDetailsComponent } from './app/add-employment-details/add-employment-details.component'
import { RoVerificationComponent } from './app/ro-verification/ro-verification.component';
import { DeviationComponent } from './app/deviation/deviation.component';

import {ButtonOverviewExample} from './app/button-overview-example';
import { IncomeDetailsComponent } from './app/income-details/income-details.component';
// import { OnlynumberDirective } from './directives/onlynumber-directive.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  entryComponents: [ButtonOverviewExample, AddEmploymentDetailsComponent, RoVerificationComponent, DeviationComponent,IncomeDetailsComponent],
  declarations: [ButtonOverviewExample, AddEmploymentDetailsComponent,  RoVerificationComponent, DeviationComponent, IncomeDetailsComponent],
  bootstrap: [ButtonOverviewExample],
  providers: []
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */