import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  LoginUserComponent,
  UserService
} from './index';

@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
