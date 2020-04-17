import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-employment-details',
  templateUrl: './add-employment-details.component.html',
  styleUrls: ['./add-employment-details.component.scss']
})
export class AddEmploymentDetailsComponent implements OnInit {
  @Input() name:any;
  model: NgbDateStruct;
  // name: = 'Angular';
  regTypeSelectedOption: string = "";
  selectedNav: any;
  navs = ['Permanent', 'Contractual', 'Part Time','Casual'];
  teams: any[] = [
    { name: 'Permanent' },
    { name: 'Manchester City' },
    { name: 'Manchester United' },
    { name: 'Arsenal' },
    { name: 'Leicester City' },
    { name: 'Chelsea' },
    { name: 'Tottenham Hotspur' },
];
  constructor(private activeModal: NgbActiveModal, public dialog : MatDialog,private dialogRef: MatDialogRef<AddEmploymentDetailsComponent>) {}

  ngOnInit() {
    this.selectedNav = 'select value';
  }
  setNav(nav:any){

    this.selectedNav = nav;
    console.log(nav);
    if(this.selectedNav !== "Permanent"){
      console.log("message");
      this.regTypeSelectedOption = "showlayout";
    }
  else if(this.selectedNav == "Permanent"){
    console.log("parrmanent");
   this.regTypeSelectedOption = "Permanent";
  }
  //   else if(this.selectedNav == "Casual"){
  //     this.regTypeSelectedOption = "Casual";
  //   }
  }
  closeButton() {
    this.dialogRef.close();
   }
 
  }
  
  


