import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../_actions/types";

export default function user(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT_USER:
      return (state = {});

    default:
      return state;
  }
}
