import { getUserDetails } from '../utils/api-utils';

export const userReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_USER":
        return getUserDetails();
      default:
        return state;
    }
}