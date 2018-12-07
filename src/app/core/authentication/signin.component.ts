import { Component, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular-6-social-login";
import { AppAuthenticationState } from "./state/app.auth.state";
import { Store } from "@ngrx/store"
import { AddUserProfileAction, RemoveUserProfile } from "./state/authentication.actions";
import { AuthenticationStateSelector } from "./state/authentication.selector";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {

  constructor(private socialAuthSvc: AuthService, private store: Store<AppAuthenticationState>) {

  }

  userName = '';

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthSvc.signIn(socialPlatformProvider)
      .then (
        (userData) => {
          console.log(socialPlatform + 'sign in data: ', userData);
          this.store.dispatch(new AddUserProfileAction(userData));
          this.store.select(AuthenticationStateSelector).subscribe(x => {
            this.userName = x.profile.name;
          });
        }
    );
  }

  public logout(): void {
    this.store.dispatch(new RemoveUserProfile());
  }
}
