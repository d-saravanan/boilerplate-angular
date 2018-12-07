export class AuthenticationState {
  UserProfile: {
    userName,
    email,
    id
    idToken?
  };
  authenticationStatus;
  expiry;
  permissions: string[];
}
