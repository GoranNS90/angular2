import { Routes } from '@angular/router';

import { LoginUserComponent } from './user/login-user.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

export const appRoutes:Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/addEmployee', component: EmployeeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
]
