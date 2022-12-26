import Image from 'next/image';
import React, {useState} from 'react';
import {ContainerImageProduct} from './style';

import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';

import {FooterProductItem} from '../FooterProductItem/FooterProductItem';

export const CardProductItem = ({product}: any) => {
  const [changerOnMouse, setChangerOnMouse] = useState(false);

  const eventOnMouseEnter = () => {
    setChangerOnMouse(true);
  };

  const eventOnMouseLeave = () => {
    setChangerOnMouse(false);
  };

  return (
    <button
      onMouseEnter={eventOnMouseEnter}
      onMouseLeave={eventOnMouseLeave}
      style={{marginBottom: '22px', border: 'none', background: 'white'}}
    >
      <ContainerImageProduct>
        <Image src={CallOfDuty} alt={product.name} />
      </ContainerImageProduct>

      <FooterProductItem changerOnMouse={changerOnMouse} product={product} />
    </button>
  );
};
