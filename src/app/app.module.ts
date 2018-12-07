import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AuthentiationHttpInterceptor } from './core/authentication/interceptors/http.interceptors';

import { GoogleLoginProvider, AuthServiceConfig, SocialLoginModule } from 'angular-6-social-login';
import { SignInComponent } from './core/authentication/signin.component';
import { getAuthServiceConfig } from './core/authentication/config/auth.service.config';
import { StoreModule } from '@ngrx/store';
import { AuthenticationReducer } from './core/authentication/state/authentication.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule, // to inject the httpinterceptors
    // GoogleLoginProvider,
    SocialLoginModule,
    StoreModule.forRoot({
      userProfile: AuthenticationReducer
    })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
