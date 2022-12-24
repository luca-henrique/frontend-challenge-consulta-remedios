import React from 'react';
import {useReducerHook} from '../../../hook/useReducerHook';
import {addProductCart} from '../../../store/reducers';
import {formatPrice} from '../../../util/formatPrice';

import {Button, ContainerDescriptionProduct, Title, Price} from './style';

export const FooterProductItem = ({changerOnMouse, product}: any) => {
  const {dispatch} = useReducerHook();
  return (
    <div style={{height: '48px'}}>
      {changerOnMouse ? (
        <Button onClick={() => dispatch(addProductCart(product))}>
          Adicionar no carrinho
        </Button>
      ) : (
        <ContainerDescriptionProduct>
          <Title>{product.name}</Title>
          <Price>{formatPrice(product.price)}</Price>
        </ContainerDescriptionProduct>
      )}
    </div>
  );
};
