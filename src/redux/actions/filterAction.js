import { SET_CATEGORY, SET_SORT_BY } from '../types';

export const setSortBy =
  ({ type, order }) =>
  (dispatch) => {
    dispatch({
      type: SET_SORT_BY,
      payload: { type, order },
    });
  };

export const setCategory = (category) => (dispatch) => {
  dispatch({
    type: SET_CATEGORY,
    payload: category,
  });
};
