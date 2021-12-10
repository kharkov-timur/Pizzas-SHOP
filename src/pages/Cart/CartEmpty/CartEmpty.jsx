import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import emptyCartImg from '../../../assets/img/empty-cart.png';

import styles from '../cart.module.scss';
import btnStyles from '../../../components/Button/button.module.scss';

const CartEmpty = () => {
  return (
    <div className={styles.content}>
      <div className={classNames('wrapper', styles.cart__container)}>
        <div className={classNames(styles.cart, styles.cart_empty)}>
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCartImg} alt="Empty cart" />
          <Link
            to="/"
            className={classNames(btnStyles.button, btnStyles.button_black)}
          >
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
