import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../types/cartTypes';
import { groupCartItems } from '../utils/cartUtils';
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
    case ADD_ITEM:
      return {
        ...state,
        items: groupCartItems(state.items, action.payload)
      };
    default:
      return state;
  }
};
export default cartReducer;
