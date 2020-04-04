import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  part: string;
  num: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { part: 'No. of Credit Card accounts with "Settled Post Write-off" status within 60 months' , num: 1},
  { part: 'No. of Credit Card accounts with "Settled or otherwise" status beyound 60 months' , num: 1}
];

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent implements OnInit {
  displayedColumns: string[] = ["part", "num"];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
