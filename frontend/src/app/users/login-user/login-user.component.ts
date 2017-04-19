import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'login-user',
  templateUrl: './login-user.component.html',
  styles: [`
    .custom-form {
      padding: 20px 30px 20px 30px;
    }
  `]
})
export class LoginUserComponent {
  user: any = {};

  constructor(private userService:UserService,
              private router:Router,
              private sharedService:SharedService) { }

  login(user) {
    this.userService.login(user).subscribe(response => {
      if (response.username) {
        this.sharedService.set(response.username);
        this.router.navigate(['/employee/list']);
      }
    },
    error => {
      console.log(error);
    });
  }
}
