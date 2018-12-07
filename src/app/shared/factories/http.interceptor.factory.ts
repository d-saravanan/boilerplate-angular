import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthentiationHttpInterceptor } from "../../core/authentication/interceptors/http.interceptors";


export const httpInterceptorFactory = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthentiationHttpInterceptor
  }
];
