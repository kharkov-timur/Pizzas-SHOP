import {
  ADD_PIZZA_CART,
  CLEAR_CART,
  MINUS_ITEMS,
  PLUS_ITEMS,
  REMOVE_CART_ITEM,
} from '../types';

export const addPizzaToCart = (pizzaObj) => (dispatch) => {
  dispatch({
    type: ADD_PIZZA_CART,
    payload: pizzaObj,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
};

export const removeCartItems = (itemsId) => (dispatch) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: itemsId,
  });
};

export const plusCartItems = (itemsId) => (dispatch) => {
  dispatch({
    type: PLUS_ITEMS,
    payload: itemsId,
  });
};

export const minusCartItems = (itemsId) => (dispatch) => {
  dispatch({
    type: MINUS_ITEMS,
    payload: itemsId,
  });
};
