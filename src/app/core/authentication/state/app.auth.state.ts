import { UserProfile } from "../models/userProfile.models";

export interface AppAuthenticationState {
  readonly userProfile: {
    profile: UserProfile
  };
}
