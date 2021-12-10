import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PizzaBlock } from '../index';
import Loader from '../Loader/Loader';
import { addPizzaToCart } from '../../redux/actions/cartAction';

const PizzaBlockContainer = () => {
  const dispatch = useDispatch();
  const pizzasListData = useSelector((state) => state.pizzas);
  const { loading, error, items } = pizzasListData;
  const cartItems = useSelector(({ cart }) => cart.items);

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  // Generate loader cards
  const genLoader = new Array(12).fill(null);

  return (
    <>
      {loading
        ? genLoader.map((_, index) => <Loader key={index} />)
        : error
        ? error.message
        : items.map((obj) => {
            return (
              <PizzaBlock
                key={obj.id}
                {...obj}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                onClickAddPizza={handleAddPizza}
              />
            );
          })}
    </>
  );
};

export default PizzaBlockContainer;
