import React from 'react';
import {Container} from './style';

import {CartItem} from '../CartItem/CartItem';
import {CartInformations} from '../CartInformations/CartInformations';
import {useReducerHook} from '../../../hook/useReducerHook';

export const CartItens = () => {
  const {
    state: {cart},
  } = useReducerHook();

  const cartList = cart.map((item) => <CartItem key={item} cart={item} />);

  return (
    <Container>
      <div style={{height: '210px', overflowY: 'scroll', marginBottom: '10px'}}>
        {cartList}
      </div>

      <CartInformations />
    </Container>
  );
};
