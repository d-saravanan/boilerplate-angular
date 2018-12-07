import { CanActivate } from "@angular/router/src/utils/preactivation";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthorizationService } from "../services/authorization.service";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthorizationService, private router: Router) {

  }

  path: ActivatedRouteSnapshot[];
  readonly route: ActivatedRouteSnapshot;

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!this.authSvc.isAuthorized()) {
      this.router.navigate(['//']);
      return of(false);
    }
    return of(true);
  }


}
