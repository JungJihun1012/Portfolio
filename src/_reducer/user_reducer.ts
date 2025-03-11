import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../actions/type";

export default (state = {}, action: any) => {
  switch(action.type) {
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload};
    case REGISTER_USER:
      return {...state, registerSuccess: action.payload};
    case AUTH_USER:
      return {...state, userDate: action.payload};

      default:
        return state;
  };
};