import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
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
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.selectedNav = 'select value';
  }
  setNav(nav:any){
    this.selectedNav = nav;
    if(this.selectedNav !== "Permanent"){
      this.regTypeSelectedOption = "showlayout";
    }
  else if(this.selectedNav == "Permanent"){
    this.regTypeSelectedOption = "Permanent";
  }
  //   else if(this.selectedNav == "Casual"){
  //     this.regTypeSelectedOption = "Casual";
  //   }
  }
  }
  


