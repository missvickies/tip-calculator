export const ITEM_ADDED = 'ITEM_ADDED';

export const addedNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});
