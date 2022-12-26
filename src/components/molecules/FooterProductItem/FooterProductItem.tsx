import React from 'react';
import {useReducerHook} from '../../../hook/useReducerHook';
import {addProductCart, removeProductCart} from '../../../store/reducers';
import {formatPrice} from '../../../util/formatPrice';

import {Button, ContainerDescriptionProduct, Title, Price} from './style';

export const FooterProductItem = ({
  changerOnMouse,
  product,
  productExistCart,
}: any) => {
  const {dispatch} = useReducerHook();

  function productEvent() {
    console.log(productExistCart);
    if (productExistCart) {
      dispatch(removeProductCart(product));
    } else {
      dispatch(addProductCart(product));
    }
  }

  return (
    <div
      style={{
        height: '48px',
        marginTop: '21px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {changerOnMouse ? (
        <Button onClick={() => productEvent()}>
          {productExistCart ? 'Remover do carrinho' : 'Adicionar no carrinho'}
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
