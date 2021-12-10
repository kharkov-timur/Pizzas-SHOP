import React from 'react';

import { CategoriesContainer, SortPopupComponent } from '../../components';
import PizzaBlockContainer from '../../components/PizzaBlock/PizzaBlockContainer';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="content__top">
        <CategoriesContainer />
        <SortPopupComponent />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlockContainer />
      </div>
    </div>
  );
};

export default Home;
