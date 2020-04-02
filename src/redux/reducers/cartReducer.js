import { TOGGLE_CART_HIDDEN } from '../types/cartTypes';

const INITIAL_STATE = {
  items: [],
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
export default cartReducer;
