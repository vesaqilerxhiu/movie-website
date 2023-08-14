import { ADD_MOVIE, DELETE_MOVIE } from "./types";

const INITIAL_STATE = {
  wishlist: []
};

const initialReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        wishlist: [...state.wishlist, { id: action.data.id }]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        wishlist: state.wishlist.filter((el) => el.id !== action.data.id)
      };
    default:
      return state;
  }
};

export default initialReducer;
