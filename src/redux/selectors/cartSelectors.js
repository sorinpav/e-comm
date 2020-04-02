import { createSelector } from 'reselect';

const selectCart = state => state.cart; // input selector

//used in cartDropdown
export const selectCartItems = createSelector([selectCart], cart => cart.items);

//used in cartIcon
export const selectCartItemsCount = createSelector([selectCartItems], items =>
  items.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);

export const selectTotalValue = createSelector(selectCartItems, items =>
  items.reduce(
    (accumulatedPrice, currentItem) =>
      accumulatedPrice + currentItem.price * currentItem.quantity,
    0
  )
);

/*
The reason for creating these selectors are so that when any other part of the state changes (like the user object), these components do not get re-rendered. It is to avoid the caveat of re-rendering when mapStateToProps executes. Memoisation concept used. 
*/
