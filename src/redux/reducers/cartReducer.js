import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  MINUS_ITEMS,
  PLUS_ITEMS,
  REMOVE_CART_ITEM,
} from '../types';

const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, item) => item.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const totalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART:
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const itemsCount = totalSum(newItems, 'items.length');
      const totalPrice = totalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        itemsCount,
        totalPrice,
      };
    case CLEAR_CART:
      return {
        items: {},
        totalPrice: 0,
        itemsCount: 0,
      };
    case REMOVE_CART_ITEM:
      const removedItems = {
        ...state.items,
      };
      const currentTotalPrice = removedItems[action.payload].totalPrice;
      const currentTotalCount = removedItems[action.payload].items.length;
      delete removedItems[action.payload];
      return {
        ...state,
        items: removedItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentTotalCount,
      };
    case PLUS_ITEMS:
      const plusItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: plusItems,
            totalPrice: getTotalPrice(plusItems),
          },
        },
      };
    case MINUS_ITEMS:
      const oldItems = state.items[action.payload].items;
      const minusItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: minusItems,
            totalPrice: getTotalPrice(minusItems),
          },
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
