import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './categories.module.scss';

const Categories = memo(({ items, onClickCategory }) => {
  const category = useSelector(({ filters }) => filters.category);

  return (
    <div className={styles.categories}>
      <ul>
        {items &&
          items.map((item, index) => {
            return (
              <li
                className={category === index ? styles.active : ''}
                onClick={() => onClickCategory(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { category: null, items: [] };

export default Categories;
