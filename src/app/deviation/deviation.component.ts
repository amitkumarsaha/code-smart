import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as  data from '../../assets/cic.json';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-deviation',
  templateUrl: './deviation.component.html',
  styleUrls: ['./deviation.component.scss']
})
export class DeviationComponent implements OnInit {
  maxDate = new Date();
  displayedColumns: string[] = ['part', 'num'];
  updateDeviation: FormGroup;
  listData: any = data;
  dataSource: any;
  showDownloadButton = false;
  constructor(private http: HttpClient, private dialogRef: MatDialogRef<DeviationComponent>) {
    // this.maxDate.setDate(this.maxDate.getDate());

    this.updateDeviation = new FormGroup({
      cifNo: new FormControl(null, [Validators.required]),
      apprvPfId: new FormControl(null, [Validators.required]),
      dateOfApprv: new FormControl(null, [Validators.required]),
      remarks: new FormControl(null),
      selectStatus: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.dataSource = this.listData.default;
    this.listData.default.forEach((rest: any) => {
    });
  }

  closeButton() {
   this.dialogRef.close();
  }

  reportStatus(event: any) {
    if (event && event.value === 'reject') {
      this.updateDeviation.controls['remarks'].setValidators([Validators.required]);
      this.updateDeviation.controls['remarks'].updateValueAndValidity();
    } else {
      this.updateDeviation.controls['remarks'].setValidators(null);
      this.updateDeviation.controls['remarks'].updateValueAndValidity();
    }
  }

  showDownload() {
    this.showDownloadButton = true;
  }
  onSubmit() {
    console.log(this.updateDeviation.value);
  }
}
