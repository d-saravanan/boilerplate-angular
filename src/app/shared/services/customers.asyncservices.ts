import { BaseHttpService } from '../asyncServices/http/base.http.service';
import { Customer } from '../models/customers.models';
import { AuthHeaders } from '../asyncServices/http/auth.headers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpService } from '../asyncServices/http/generic.http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersAsyncServices extends GenericHttpService<Customer> {
  constructor(private apiClient: HttpClient, private reqHeaders: AuthHeaders) {
    super(apiClient, reqHeaders);
    this.baseAPIUrl = 'http://localhost:64695/';
    this.serviceAPISegment = 'api/customers';
  }
}
