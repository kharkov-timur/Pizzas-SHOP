import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setCategory } from '../../redux/actions/filterAction';
import { Categories } from '../index';
import { CATEGORY_NAMES } from '../../constants/constants';

const CategoriesContainer = memo(() => {
  const dispatch = useDispatch();

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  return (
    <>
      <Categories items={CATEGORY_NAMES} onClickCategory={onSelectCategory} />
    </>
  );
});

export default CategoriesContainer;
