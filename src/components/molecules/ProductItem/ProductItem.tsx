import Image from 'next/image';
import React, {useState} from 'react';
import {
  Button,
  ContainerDescriptionProduct,
  ContainerImageProduct,
  Price,
  Title,
} from './style';

import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';

import {useReducerHook} from '../../../hook/useReducerHook';
import {addProductCart} from '../../../store/reducers';

export const CardProductItem = ({product}: any) => {
  const {dispatch} = useReducerHook();

  const [changerOnMouse, setChangerOnMouse] = useState(false);

  const eventOnMouseEnter = () => {
    setChangerOnMouse(true);
  };

  const eventOnMouseLeave = () => {
    setChangerOnMouse(false);
  };

  return (
    <button onMouseEnter={eventOnMouseEnter} onMouseLeave={eventOnMouseLeave}>
      <ContainerImageProduct>
        <Image
          src={CallOfDuty}
          alt={product.name}
          style={{background: 'white'}}
        />
      </ContainerImageProduct>

      {changerOnMouse ? (
        <Button onClick={() => dispatch(addProductCart(product))}>
          Adicionar no carrinho
        </Button>
      ) : (
        <ContainerDescriptionProduct>
          <Title>{product.name}</Title>
          <Price>{product.price}</Price>
        </ContainerDescriptionProduct>
      )}
    </button>
  );
};
