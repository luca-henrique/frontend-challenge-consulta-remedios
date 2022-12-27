import React from 'react';

import {useReducerHook} from '../../../hook/useReducerHook';
import {IProduct} from '../../../types';

import {Container, ContainerCartList} from './style';
import {CartItem} from '../CartItem/CartItem';
import {CartInformations} from '../CartInformations/CartInformations';

export const CartItens = () => {
  const {
    state: {cart},
  } = useReducerHook();

  const cartList = cart.map((item: IProduct) => (
    //@ts-ignore
    <CartItem key={item.id} cart={item} />
  ));

  return (
    <Container>
      <ContainerCartList>{cartList}</ContainerCartList>

      <CartInformations />
    </Container>
  );
};
