import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoSvg from '../../assets/img/pizza-logo.svg';
import { Button } from '../../components';

import styles from './header.module.scss';

function Header() {
  const location = useLocation();
  const { totalPrice, itemsCount } = useSelector(({ cart }) => cart);

  const checkLocation = () => {
    return location.pathname !== '/cart' ? (
      <Link to="/cart">
        <Button
          className={styles.button__cart}
          totalPrice={totalPrice}
          itemsCount={itemsCount}
        />
      </Link>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>Nice Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        {checkLocation()}
      </div>
    </div>
  );
}

export default Header;
