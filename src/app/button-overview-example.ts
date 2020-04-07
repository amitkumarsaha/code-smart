import { Component } from '@angular/core';
import { DeviationComponent } from './deviation/deviation.component';
import { MatDialog } from '@angular/material';
/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css']
})
export class ButtonOverviewExample {
  constructor(public dialog: MatDialog) {}
  color = 'accent';

  openDeviation() {
    const dialogRef = this.dialog.open(DeviationComponent, {
      height: '500px',
      width: '700px'
    });
  }

}