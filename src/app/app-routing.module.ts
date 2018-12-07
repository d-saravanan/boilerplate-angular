import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent, AppAuthHeaders } from './customers/customers.component';
import { SharedModule } from './shared/shared.module';
import { CustomersDataService } from './shared/services/customers.data.service';
import { CustomersAsyncServices } from './shared/services/customers.asyncservices';
import { AuthHeaders } from './shared/asyncServices/http/auth.headers';
import { SignInComponent } from './core/authentication/signin.component';
import { AuthGuard } from './core/authentication/guards/auth.guard';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent, canActivate: [ AuthGuard ] },
  { path: '', component: SignInComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    CustomersComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
