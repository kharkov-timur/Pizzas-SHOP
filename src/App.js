import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from './components';
import { CartContainer, Home } from './pages';
import { fetchPizzas } from './redux/actions/pizzaAction';

function App() {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // Fetch pizzas with fake server
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [dispatch, category, sortBy]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <CartContainer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
