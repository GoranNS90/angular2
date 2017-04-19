import { Component } from '@angular/core';

import { SharedService } from '../../shared/shared.service';
import { EmployeeService } from '../shared/employee.service';

@Component({
  templateUrl: 'employee-list.component.html'
})
export class EmployeeListComponent {

  private user:any;
  private employees:any = [];
  private pagination:any = {};

  constructor(private sharedService:SharedService,
              private employeeService:EmployeeService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.pagination.currentPage = 0;
    this.pagination.itemsPerPage = 5;
    this.pagination.itemsPerPages = [5, 10, 15, 20, 25];
    this.pagination.maxPage = 3;
    this.getAll();
  }

  getAll() {
    this.employeeService.getAllEmployees().subscribe(response => {
        this.employees = response;
        this.pagination.totalItems = response.length;
        this.pagination.totalPages =  Math.ceil(response.length/this.pagination.itemsPerPage);
        this.pagination.totalPages > this.pagination.maxPage && this.pagination.totalPages > 3 ? this.pagination.maxPage = 3 : this.pagination.maxPage = this.pagination.totalPages;
        this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i);
      },
      error => {
        console.log(error);
      })
  }

  paginationChange(pagination) {
    this.pagination = pagination;
  }

}
