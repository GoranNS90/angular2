import { Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

export const employeeRoutes:Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: EmployeeListComponent },
  { path: 'add', component: EmployeeAddComponent }
]
