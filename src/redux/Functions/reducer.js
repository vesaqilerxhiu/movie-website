import { ADD_MOVIE, DELETE_MOVIE } from "./types";

const INITIAL_STATE = {
  wishlist: []
};

const initialReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      // return-in e bojme me {} sepse state fillimisht ka qene objekt, dmth INITIAL_STATE = {}
      return {
        ...state,
        wishlist: [...state.wishlist, { id: action.data.id }]
      };
    case DELETE_MOVIE:
      return {
        ...state,
        wishlist: state.wishlist.filter((el) => el.id !== action.data.id)
        // This condition checks if the id of the current element (el) is not equal to the id of the movie being deleted (action.data.id). If the condition is true, the element is kept in the filtered array; if false, it's removed.
      };
    default:
      return state;
  }
};

export default initialReducer;
// A reducer is a function that takes the previous state and an action, and returns the next state. It specifies how the state changes in response to an action.
