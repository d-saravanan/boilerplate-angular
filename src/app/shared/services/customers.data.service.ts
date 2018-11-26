import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "../asyncServices/http/base.http.service";
import { Customer } from "../models/customers.models";
import { Observable } from "rxjs";
import { AuthHeaders } from "../asyncServices/http/auth.headers";

@Injectable({
  providedIn: 'root'
})
export class CustomersDataService extends BaseHttpService<Customer> {
  constructor(private apiClient: HttpClient, private reqHeaders: AuthHeaders) {
    super(apiClient, reqHeaders);
    this.baseAPIUrl = 'http://localhost:64695/';
    this.serviceAPISegment = 'api/customers';
  }
}
