import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PaginationModule } from '../shared/pagination/pagination.module';

import { employeeRoutes } from './routes';

import {
  EmployeeComponent,
  EmployeeAddComponent,
  EmployeeListComponent,
  EmployeeService
} from './index';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    RouterModule.forChild(employeeRoutes)
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
