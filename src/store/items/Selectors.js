import { createSelector } from 'reselect';
//selectors take the large state tree and gets what you need out of it
export const selectItems = (state) => state.items;
export const selectItem = (state, props) => {
  return state.items.find((item) => item.uuid === props.uuid);
};
export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);
export const selectTipPercentage = (state) => state.tipPercentage;
//create selector takes an array of functions and a function to compute the values
export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => subtotal * (tipPercentage / 100)
);
export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
