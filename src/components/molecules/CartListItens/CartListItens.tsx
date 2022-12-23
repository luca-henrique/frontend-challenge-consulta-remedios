import React from 'react';
import styled from 'styled-components';
import {CartInformations} from '../CartInformations/CartInformations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

import {CartItem} from '../CartItem/CartItem';

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
