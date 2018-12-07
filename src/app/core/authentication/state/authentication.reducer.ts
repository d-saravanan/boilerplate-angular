import { doSignIn, signInSuccess, signInFailure, getUserProfile, addUserProfile, removeUserProfile } from "./authentication.actions";
import { UserProfile } from "../models/userProfile.models";

const initialState = {
    profile: {
    id: '',
    name: '',
    email: '',
    idToken: ''
  }
};

export function AuthenticationReducer(state = initialState, action) {
  console.log(state, action);

  switch (action.type) {
    case doSignIn: {
      break;
    }
    case signInSuccess: {
      break;
    }
    case signInFailure: {
      break;
    }
    case getUserProfile: {
      return state.profile;
    }
    case addUserProfile: {
      return {
        ...state,
        profile: action.payload
      };
    }
    case removeUserProfile: {
      return {
        ...state,
        profile: initialState
      };
    }
    default: {
      return state;
    }
  }
}
