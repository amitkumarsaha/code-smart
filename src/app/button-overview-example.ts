import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { IncomeDetailsComponent } from './income-details/income-details.component';

/**
 * @title Basic buttons
 */
@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"],
})
export class ButtonOverviewExample {
  color = "accent";

  constructor(public dialog: MatDialog){}

  openIncomeDetails(){
    const dialogRef = this.dialog.open(IncomeDetailsComponent, {
      width: '2200px',
      height: '800px'
    });
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
