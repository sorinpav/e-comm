import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM,
  REMOVE_ITEM,
} from '../types/cartTypes';
import { groupCartItems, removeItemFromCart } from '../utils/cartUtils';
const INITIAL_STATE = {
  items: [],
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: groupCartItems(state.items, action.payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
