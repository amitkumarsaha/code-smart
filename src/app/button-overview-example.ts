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
  // encapsulation: ViewEncapsulation.None,
  constructor(
    // private modalService: NgbModal,
     public dialog: MatDialog) { }

  openXl(content: string) {
    // this.modalService.open(AddEmploymentDetailsComponent, { size: 'xl' });
    let dialogRef = this.dialog.open(AddEmploymentDetailsComponent, {
      height: "800px",
      width: "600px"
    });
  }

  openRoVerification() {
    let dialogRef = this.dialog.open(RoVerificationComponent, {
      height: "900px",
      width: "600px"
    });
  }

  openDeviation() {
    let dialogRef = this.dialog.open(DeviationComponent, {
      height: "400px",
      width: "600px"
    });
  }

  openIncomeDetails(){
    const dialogRef = this.dialog.open(IncomeDetailsComponent, {
      width: '900px',
      height: '800px'
    });
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
