import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploymentDetailsComponent } from './add-employment-details.component';

describe('AddEmploymentDetailsComponent', () => {
  let component: AddEmploymentDetailsComponent;
  let fixture: ComponentFixture<AddEmploymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmploymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmploymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
