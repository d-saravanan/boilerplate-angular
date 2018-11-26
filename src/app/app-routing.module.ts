import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: '', component: CustomersComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    CustomersComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
