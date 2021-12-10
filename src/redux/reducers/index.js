import { combineReducers } from 'redux';
import filterReducer from './filtersReducer';
import cartReducer from './cartReducer';
import pizzasReducer from './pizzasReducer';

export default combineReducers({
  filters: filterReducer,
  cart: cartReducer,
  pizzas: pizzasReducer,
});
