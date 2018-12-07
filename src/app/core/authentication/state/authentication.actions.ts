
import { Action } from '@ngrx/store';
import { UserProfile } from '../models/userProfile.models';

export const doSignIn = "DO_SIGNIN";
export const signInSuccess = "SIGNIN_SUCCESS";
export const signInFailure = "SIGNIN_FAILURE";
export const getUserProfile = "GET_USER_PROFILE";
export const addUserProfile = "[USERPROFILE] ADD";
export const removeUserProfile = "[USERPROFILE] DELETE";

export class DoSignInAction implements Action {
  readonly type: string = doSignIn;
}

export class SignInSuccessAction implements Action {
  readonly type: string  = signInSuccess;
}

export class SignInFailureAction implements Action {
  readonly type: string = signInFailure;
}

export class GetUserProfileAction implements Action {
  readonly type: string = getUserProfile;
}

export class AddUserProfileAction implements Action {
  readonly type: string = addUserProfile;

  constructor(public payload: UserProfile) {}
}

export class RemoveUserProfile implements Action {
  readonly type: string = removeUserProfile;

  constructor() { }
}

