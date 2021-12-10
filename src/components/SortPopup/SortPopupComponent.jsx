import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SortPopup } from '../index';
import { setSortBy } from '../../redux/actions/filterAction';
import { SORT_ITEMS } from '../../constants/constants';

const SortPopupComponent = memo(() => {
  const dispatch = useDispatch();
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();

  const onSelectSortType = useCallback(
    (item) => {
      dispatch(setSortBy(item));
    },
    [dispatch],
  );

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (item) => {
    onSelectSortType(item);
    setVisiblePopup(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, [dispatch]);

  return (
    <div>
      <SortPopup
        items={SORT_ITEMS}
        sortRef={sortRef}
        onSelectItem={onSelectItem}
        visiblePopup={visiblePopup}
        toggleVisiblePopup={toggleVisiblePopup}
      />
    </div>
  );
});

export default SortPopupComponent;
