import { Component } from '@angular/core';

import { SharedService } from './shared/shared.service';
import {UserService} from "./users/shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-component',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private user:any = {};

  constructor(private userService:UserService,
              private router:Router,
              private sharedService:SharedService) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  logout() {
    this.userService.logout().subscribe(response => {
      this.sharedService.set('');
      this.router.navigate(['/']);
    },
      error => {
        console.log(error);
      })
  }

}
