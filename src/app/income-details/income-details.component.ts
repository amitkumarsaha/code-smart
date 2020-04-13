import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
// import 'moment/locale/pt-br';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.scss']
})
export class IncomeDetailsComponent implements OnInit {
  showAccDetails: boolean = false;
  showTable: boolean = false;
  incomeDetails: FormGroup;
  repaymentList: any= [];
  
  
  constructor() {
    this.incomeDetails = new FormGroup({
      modeRepay: new FormControl(null),
      salaryAccount: new FormControl(null),
      ifscCode: new FormControl(null)
    })


    this.curDate();
 

    this.repaymentList = [
     {
      name: 'Select mode of repayment',
      value: "modeofRepayment"
     },
     {
       name: "SI (Salary A/C with SBI)",
       value: "SI"
     },
     {
      name: "NACH (Salary A/C not with SBI)",
      value: "NACH"
     }
    ]
  }


  monthslist:any=[];
  curDate() {
    debugger
    // let now=moment().subtract(6, 'months').format('MMM');
    for(var i=0;i<6;i++){
    this.monthslist.push(moment().subtract(i, 'months').format('MMM'));
    }
    // for(var i=0;i<6;i++){
    //   this.monthslist.push(moment().subtract(i, 'months').format('yyyy'));
    //   }
    console.log("now",this.monthslist)
 }

  ngOnInit() {
  }
  changeAccount(event: any){
    // this.showAccDetails = false;
    console.log(event);
    this.showTable = false;

    if(event && event.value == 'NACH') {
      this.showAccDetails = true;
      this.incomeDetails.controls["salaryAccount"].setValidators([Validators.required]);
      this.incomeDetails.controls["salaryAccount"].updateValueAndValidity();
      this.incomeDetails.controls["ifscCode"].setValidators([Validators.required]);
      this.incomeDetails.controls["ifscCode"].updateValueAndValidity();
    }else {
      this.showAccDetails = false;
      // this.showTable = false;
      this.incomeDetails.reset();
    }
   }
   fetchTable(){
     this.showTable = true;
   }
}
