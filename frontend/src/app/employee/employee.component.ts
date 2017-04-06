import { Component } from '@angular/core';

import { EmployeeService } from './employee.service';

declare var Materialize:any;

@Component({
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {

  private employee:any = {};

  constructor(private employeeService:EmployeeService) {

  }

  addEmployee(employee) {
    this.employeeService.addEmployee(employee).subscribe(response => {
      this.employee = {};
      Materialize.toast('New employee has been added', 4000, 'green');
    },
    error => {
      console.log(error);
    });
  }

}
