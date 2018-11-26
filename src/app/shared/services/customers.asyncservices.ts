import { BaseHttpService } from "../asyncServices/http/base.http.service";
import { Customer } from "../models/customers.models";
import { AuthHeaders } from "../asyncServices/http/auth.headers";
import { HttpClient } from "@angular/common/http";

export class CustomersAsyncServices extends BaseHttpService <Customer> {
  constructor(private apiClient: HttpClient, private reqHeaders: AuthHeaders) {
    super(apiClient, reqHeaders);
    this.baseAPIUrl = 'http://localhost:64695/';
    this.serviceAPISegment = 'api/customers';
  }
}
