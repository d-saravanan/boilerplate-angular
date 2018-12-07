import { AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login";

export function getAuthServiceConfig() {
  const config = new AuthServiceConfig(
    [
      {
        provider: new GoogleLoginProvider('1020013642755-18cgh3on59ildkl5ujedjc98eq7s0i9v.apps.googleusercontent.com'),
        id: GoogleLoginProvider.PROVIDER_ID
      }
    ]
  );
  return config;
}
