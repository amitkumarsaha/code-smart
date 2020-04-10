import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['part', 'num'];
  updateDeviation: FormGroup;
  listData: any = data;
  dataSource: any;

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<DeviationComponent>) {
    this.updateDeviation = new FormGroup({
      cifNo: new FormControl(null, [Validators.required]),
      apprvPfId: new FormControl(null, [Validators.required]),
      dateOfApprv: new FormControl(null, [Validators.required]),
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

}
