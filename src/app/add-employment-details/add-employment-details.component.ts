import { Component, OnInit,Input } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-employment-details',
  templateUrl: './add-employment-details.component.html',
  styleUrls: ['./add-employment-details.component.scss']
})
export class AddEmploymentDetailsComponent implements OnInit {
  @Input() name:any;
  // model: NgbDateStruct;

  constructor(
    // public activeModal: NgbActiveModal
    ) {}

  ngOnInit() {
  }

}
