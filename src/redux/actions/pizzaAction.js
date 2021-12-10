import { PIZZAS_ERROR, SET_LOADING, SET_PIZZAS } from '../types';
import { pizzasAPI } from '../../api/api';
// import { pizzasAPI } from '../../api/api';

export const fetchPizzas = (sortBy, category) => async(dispatch) => {
  dispatch(setLoaded(true));
  try {
    const { data } = await pizzasAPI.getPizzas(sortBy, category);

    console.log(data);

    dispatch(setPizzas(data));
    dispatch(setLoaded(false));
  } catch (err) {
    dispatch(pizzasError(err));
  }
};

export const setLoaded = (value) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: value,
  });
};

export const setPizzas = (data) => ({
  type: SET_PIZZAS,
  payload: data,
});

export const pizzasError = (err) => ({
  type: PIZZAS_ERROR,
  payload: err,
});
