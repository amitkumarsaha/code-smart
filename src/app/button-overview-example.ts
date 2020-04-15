import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { ViewEncapsulation } from '@angular/compiler/src/compiler_facade_interface';
import { AddEmploymentDetailsComponent } from './add-employment-details/add-employment-details.component';
import { RoVerificationComponent } from './ro-verification/ro-verification.component';
import { DeviationComponent } from './deviation/deviation.component';

/**
 * @title Basic buttons
 */
@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"],
})

export class ButtonOverviewExample {
  closeResult: string;
  content: any;
  color = "accent";
  constructor(
    public dialog: MatDialog) { }

  openXl() {
    let dialogRef = this.dialog.open(AddEmploymentDetailsComponent, {
      height: "800px",
      width: "600px"
    });
  }

  openRoVerification() {
    const dialogRef = this.dialog.open(RoVerificationComponent, {
      height: '600px',
      width: '700px'
    });
  }

  openDeviation() {
    const dialogRef = this.dialog.open(DeviationComponent, {
      height: '600px',
      width: '700px'
    });
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
