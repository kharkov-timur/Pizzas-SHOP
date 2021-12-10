import React from 'react';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearCart,
  minusCartItems,
  plusCartItems,
  removeCartItems,
} from '../../redux/actions/cartAction';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { items, itemsCount, totalPrice } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItems = (itemsId) => {
    if (window.confirm('Вы действительно хотите удалить пиццу?')) {
      dispatch(removeCartItems(itemsId));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItems(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItems(id));
  };

  return (
    <Cart
      itemsCount={itemsCount}
      totalPrice={totalPrice}
      addedPizzas={addedPizzas}
      items={items}
      onClearCart={onClearCart}
      onRemoveItems={onRemoveItems}
      onPlus={onPlusItem}
      onMinus={onMinusItem}
    />
  );
};

export default CartContainer;
