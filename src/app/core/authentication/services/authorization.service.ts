import { Injectable } from "@angular/core";
import { stringify } from "@angular/core/src/render3/util";
import { AppAuthenticationState } from "src/app/core/authentication/state/app.auth.state";
import { Store } from "@ngrx/store";
import { AuthenticationStateSelector } from "../state/authentication.selector";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor (private store: Store<AppAuthenticationState>) {

  }

  getAuthToken(): string {
    this.store.select(AuthenticationStateSelector).subscribe(prof => {
      return prof.profile.idToken;
    });
    return '';
  }

  isAuthorized(): boolean {
    let token = '';
    // get the idToken from the store
    this.store.select(AuthenticationStateSelector).subscribe(p => {
      token = p.profile.idToken;
    });
    // store should return a valid idToken
    return ( token && token.length > 0 );
  }
}
