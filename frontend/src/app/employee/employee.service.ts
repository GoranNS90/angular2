import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable, Subscription } from "rxjs";

@Injectable()
export class EmployeeService {

  constructor(private http:Http) {

  }

  addEmployee(employee):Observable<any> {
    return this.http.post('/employee/add', employee)
      .map((res:Response) => res)
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  getAllEmployees():Observable<any> {
    return this.http.get('/employee/getAll').map((res:Response) => res.json());
  }

}
