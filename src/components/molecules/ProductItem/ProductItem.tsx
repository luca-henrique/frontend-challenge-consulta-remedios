import Image from 'next/image';
import React, {useState} from 'react';
import {ContainerImageProduct} from './style';

import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';

import {FooterProductItem} from '../FooterProductItem/FooterProductItem';
import {useReducerHook} from '../../../hook/useReducerHook';

export const CardProductItem = ({product}: any) => {
  const [changerOnMouse, setChangerOnMouse] = useState(false);
  const [productExistCart, setProcuctExistCart] = useState(false);

  const {
    state: {cart},
  } = useReducerHook();

  const eventOnMouseEnter = () => {
    let existProduct = cart.find(function (item) {
      return item.id === product.id;
    });
    setProcuctExistCart(!!existProduct);
    setChangerOnMouse(true);
  };

  const eventOnMouseLeave = () => {
    setChangerOnMouse(false);
  };

  return (
    <div
      onMouseEnter={eventOnMouseEnter}
      onMouseLeave={eventOnMouseLeave}
      style={{marginBottom: '22px', border: 'none', background: 'white'}}
    >
      <ContainerImageProduct>
        <Image src={CallOfDuty} alt={product.name} />
      </ContainerImageProduct>

      <FooterProductItem
        changerOnMouse={changerOnMouse}
        product={product}
        productExistCart={productExistCart}
      />
    </div>
  );
};
