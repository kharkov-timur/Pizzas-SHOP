import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './pizzaBlock.module.scss';

import ButtonAdd from './ButtonAdd/ButtonAdd';
import { AVAILABLE_SIZES, AVAILABLE_TYPES } from '../../constants/constants';

const PizzaBlock = ({
  id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(types[0]);

  const onActiveSize = (index) => setActiveSize(index);
  const onActiveType = (index) => setActiveType(index);

  const pizzaObj = {
    id,
    name,
    imageUrl,
    price,
    size: AVAILABLE_SIZES[activeSize],
    type: AVAILABLE_TYPES[activeType],
  };

  const typeList = AVAILABLE_TYPES.map((type, index) => {
    return (
      <li
        onClick={() => onActiveType(index)}
        key={type}
        className={
          styles[
            classNames({
              active: activeType === index,
              disabled: !types.includes(index),
            })
          ]
        }
      >
        {type}
      </li>
    );
  });

  const sizesList = AVAILABLE_SIZES.map((size, index) => {
    return (
      <li
        onClick={() => onActiveSize(index)}
        key={size}
        className={
          styles[
            classNames({
              active: activeSize === index,
              disabled: !sizes.includes(size),
            })
          ]
        }
      >
        {size} см.
      </li>
    );
  });

  return (
    <div className={styles.block}>
      <img className={styles.block__image} src={imageUrl} alt="Pizza" />
      <h4 className={styles.block__title}>{name}</h4>
      <div className={styles.block__selector}>
        <ul>{typeList}</ul>
        <ul>{sizesList}</ul>
      </div>
      <div className={styles.block__bottom}>
        <div className={styles.block__price}>от {price} ₽</div>
        <ButtonAdd
          onClickAddPizza={onClickAddPizza}
          addedCount={addedCount}
          obj={pizzaObj}
        />
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.number),
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: '',
  price: 0,
  sizes: [],
  types: [],
};

export default PizzaBlock;
