import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { CustomersDataService } from "../shared/services/customers.data.service";
import { Customer } from "../shared/models/customers.models";
import { AuthHeaders } from "../shared/asyncServices/http/auth.headers";
import { Observable } from "rxjs";
import { CustomersAsyncServices } from "../shared/services/customers.asyncservices";
@Injectable()
export class AppAuthHeaders extends AuthHeaders {
  constructor() {
    super('Bearer xxxxxxx', 'application/json');
  }
}
@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  providers: [
    CustomersDataService,
    CustomersAsyncServices
    { provide: AuthHeaders, useClass: AppAuthHeaders }
  ]
})
export class CustomersComponent implements OnInit {
  Customers: Customer[] = [];
  OCustomers: Observable<Customer[]>;
  pageTitle = 'Welcome to CM';

  ngOnInit(): void {
    this.OCustomers = this.dataSvc.getCustomers();
    this.dataSvc.getCustomers().subscribe(arg => (this.Customers = arg));
  }

  constructor(private dataSvc: CustomersDataService) {}
}


