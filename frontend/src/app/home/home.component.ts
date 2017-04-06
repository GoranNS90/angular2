import { Component } from '@angular/core';

import { SharedService } from '../shared/shared.service';
import { EmployeeService } from '../employee/employee.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent {

  private username:string;
  private employees:any = [];
  private pagination:any = {};

  constructor(private sharedService:SharedService,
              private employeeService:EmployeeService) { }

  ngOnInit() {
    this.username = this.sharedService.get();
    this.pagination.currentPage = 0;
    this.pagination.itemsPerPage = 3;
    this.pagination.itemsPerPages = [5, 10, 15, 20, 25];
    this.pagination.maxPage = 3;
    this.getAll();
  }

  getAll() {
    this.employeeService.getAllEmployees().subscribe(response => {
        this.employees = response;
        this.pagination.totalPages = Math.round(response.length/this.pagination.itemsPerPage);
        this.pagination.totalPages > this.pagination.maxPage ? this.pagination.maxPage : this.pagination.maxPage = this.pagination.totalPages;
        this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i);
      },
      error => {
        console.log(error);
      })
  }

  setPage(page) {
    this.pagination.currentPage = page;
    if (this.pagination.totalPages > this.pagination.maxPage) {
      if (page == 0) {
        this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i);
      } else {
        if (page == this.pagination.totalPages - 1) {
          this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i + page -2);
        } else {
          this.pagination.pages = Array.from(Array(this.pagination.maxPage),(x, i) => i + page -1);
        }
      }
    }
  }

}
