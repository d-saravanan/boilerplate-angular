import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthorizationService } from "../services/authorization.service";

@Injectable()
export class AuthentiationHttpInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthorizationService) {

  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authSvc.getAuthToken();

    const authReq = request.clone({ setHeaders: { Authorization: authToken } });

    return next.handle(authReq);
  }
}
