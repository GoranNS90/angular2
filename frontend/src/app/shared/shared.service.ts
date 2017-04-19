import { Injectable } from '@angular/core';

import { Headers } from '@angular/http';

export interface User {
  username:string;
}

@Injectable()
export class SharedService {

  user:User = {
    username: ''
  };

  /*get():User {
    return this.user;
  }*/

  set(username:string) {
    this.user.username = username;
  }

}
