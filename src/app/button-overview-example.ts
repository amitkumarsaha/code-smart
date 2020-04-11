import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmploymentDetailsComponent } from './add-employment-details/add-employment-details.component'
import { RoVerificationComponent } from './ro-verification/ro-verification.component';
import { MatDialog } from '@angular/material';
import { DeviationComponent } from './deviation/deviation.component';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonOverviewExample {
  closeResult: string;
  content: any;

  constructor(private modalService: NgbModal, public dialog: MatDialog) { }

  openXl(content: string) {
    this.modalService.open(AddEmploymentDetailsComponent, { size: 'xl' });
  }

  openRoVerification() {
    const dialogRef = this.dialog.open(RoVerificationComponent, {
      height: '400px',
      width: '600px'
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
