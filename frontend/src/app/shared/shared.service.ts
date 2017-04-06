import { Injectable } from '@angular/core';

import { Headers } from '@angular/http';

@Injectable()
export class SharedService {

  private username:string;

  get():string {
    return this.username;
  }

  set(username:string) {
    this.username = username;
  }

}
