import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, Subscription } from "rxjs";

@Injectable()
export class UserService {
  private data: any;
  constructor(private http:Http) { }

  login(user):Observable<any> {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + user.password ));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    return this.http.get('/user/getUser', { headers : headers })
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
