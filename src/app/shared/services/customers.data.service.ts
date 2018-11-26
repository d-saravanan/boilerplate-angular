import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../asyncServices/http/base.http.service";
import { Customer } from "../models/customers.models";
import { Observable } from "rxjs";
import { AuthHeaders } from "../asyncServices/http/auth.headers";
import { CustomersAsyncServices } from "./customers.asyncservices";

@Injectable({
  providedIn: 'root'
})
export class CustomersDataService {
  constructor(private asyncServices: CustomersAsyncServices) {
    // super(apiClient, reqHeaders);
    // this.baseAPIUrl = 'http://localhost:64695/';
    // this.serviceAPISegment = 'api/customers';
  }

  getCustomers(): Observable<Customer[]> {
    return this.asyncServices.get<Customer>();
  }
}


// export class CustomersDataService extends BaseHttpService<Customer> {
//   constructor(private apiClient: HttpClient, private reqHeaders: AuthHeaders) {
//     super(apiClient, reqHeaders);
//     this.baseAPIUrl = "http://localhost:64695/";
//     this.serviceAPISegment = "api/customers";
//   }
// }
