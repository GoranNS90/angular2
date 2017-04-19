import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';

declare var Materialize:any;

@Component({
  templateUrl: './employee-add.component.html'
})
export class EmployeeAddComponent {

  employeeForm:FormGroup;

  constructor(private employeeService: EmployeeService,
              private fb:FormBuilder) {
  }

  ngOnInit() {
    let fname = new FormControl('goran');
    let lname = new FormControl('sasic');
    let email = new FormControl('goran.sasic@gmail.com');
    this.employeeForm = new FormGroup({
      fname: fname,
      lname: lname,
      email: email
    });
  }

  addEmployee(employeeForm) {
    console.log(employeeForm);
    this.employeeService.addEmployee(employeeForm).subscribe(response => {
      //this.employeeForm.reset();
      Materialize.toast('New employee has been added', 4000, 'green');
    },
    error => {
      console.log(error);
    });
  }

}
