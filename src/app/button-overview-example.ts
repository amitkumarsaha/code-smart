import { Component, ViewEncapsulation  } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmploymentDetailsComponent } from './add-employment-details/add-employment-details.component'

/**
 * @title Basic buttons
 */
@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonOverviewExample {
  closeResult: string;
  content:any;

  constructor(private modalService: NgbModal,) {}

  openXl(content:string) {
    this.modalService.open(AddEmploymentDetailsComponent, { size: 'xl' });
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
