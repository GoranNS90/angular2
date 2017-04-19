import { Routes } from '@angular/router';

import { LoginUserComponent } from './users/login-user/login-user.component';

export const appRoutes:Routes = [
  { path: 'login-user', component: LoginUserComponent },
  { path: 'employee', loadChildren: './employees/employee.module#EmployeeModule' },
  { path: '', redirectTo: 'login-user', pathMatch: 'full' }
]
