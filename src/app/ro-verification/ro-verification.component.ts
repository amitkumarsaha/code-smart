import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import *  as  data from '../../assets/profile.json';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: "app-ro-verification",
  templateUrl: "./ro-verification.component.html",
  styleUrls: ["./ro-verification.component.scss"]
})
export class RoVerificationComponent implements OnInit {
  displayedColumns: string[] = ["name", "num", "email"];
  reportDecision: any;
  approveRejectDate: Date;
  roUpdateForm = new FormGroup({
    reportDecision: new FormControl('', Validators.required),
    approveRejectDate: new FormControl('', Validators.required),
    remarks: new FormControl("")
  })

  roVerificationBankOfficerForm = new FormGroup({
    pfId: new FormControl('', Validators.required),
    name: new FormControl(""),
    mobile: new FormControl(""),
    email: new FormControl(""),
    remarks: new FormControl(""),
  });

  roVerificationThirdPartyForm = new FormGroup({
    agencyName: new FormControl('', Validators.required),
    agencyUserName: new FormControl('', Validators.required),
    agencyEmail: new FormControl('', Validators.required),
    remarks: new FormControl(""),
    agencyMobile: new FormControl('', Validators.required)
  });

  entityType = 'bankOfficer';
  pfId = '';
  agencyName = '';
  agencyUserName = '';
  agencyEmail = '';
  agencyMobile = '';
  listData: any = data;
  dataSource: any;
  showUserProfile = false;
  showDownloadButton = false;
  username: any;
  maxDate = Date.now;
  showDownloadButton2 = false;

  constructor(private dialogRef: MatDialogRef<RoVerificationComponent>) {
  }

  ngOnInit() {
    this.dataSource = this.listData.default;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  showProfile() {
    this.showUserProfile = (this.pfId.length >= 4) ? true : false;
    this.username = this.listData.default[0].name;
  }

  showDownload() {
    this.showDownloadButton = true;
  }

  showDownload2() {
    this.showDownloadButton2 = true;
  }

  onSubmitUpdate(event: any) {
    console.log(event.value);
  }

  onSubmitThirdParty(event: any) {
    console.log(event.value);
  }

  onSubmitBankOfficer(event: any) {
    console.log(event.value);
  }

}
