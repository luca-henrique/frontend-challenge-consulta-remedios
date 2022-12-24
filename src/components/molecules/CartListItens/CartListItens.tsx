import React from 'react';
import {Container} from './style';

import {CartItem} from '../CartItem/CartItem';
import {CartInformations} from '../CartInformations/CartInformations';

export const CartItens = () => {
  const cart = [1, 2, 3];

  const cartList = cart.map((item) => <CartItem key={item} />);

  return (
    <Container>
      {cartList}

      <CartInformations />
    </Container>
  );
};
