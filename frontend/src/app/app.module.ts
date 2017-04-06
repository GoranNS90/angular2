import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './user/login-user.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

import { UserService } from './user/user.service';
import { SharedService } from './shared/shared.service';
import { EmployeeService } from './employee/employee.service';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    HomeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    SharedService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
