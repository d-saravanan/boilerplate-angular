import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    //httpInterceptorFactory
    //AuthorizationService
  ],
  exports: [

  ]

})

export class SharedModule { }
