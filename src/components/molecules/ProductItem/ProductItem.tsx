import Grid from '@mui/material/Grid';
import Image from 'next/image';
import React, {useState} from 'react';
import {Price, Title} from './style';

import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';

export const CardProductItem = ({name, price}: any) => {
  const [changerOnMouse, setChangerOnMouse] = useState(false);

  const [cart, setCart] = useState([]);

  const addProductCart = (product: any) => {
    setCart([...cart, product]);
  };

  const eventOnMouseEnter = () => {
    setChangerOnMouse(true);
  };

  const eventOnMouseLeave = () => {
    setChangerOnMouse(false);
  };

  return (
    <Grid xs={12} sm={6} md={4} lg={4} style={{marginBottom: '41px'}}>
      <button onMouseEnter={eventOnMouseEnter} onMouseLeave={eventOnMouseLeave}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '21px 41px',
          }}
        >
          <Image src={CallOfDuty} alt='aq' style={{background: 'white'}} />
        </div>

        {changerOnMouse ? (
          <button onClick={() => addProductCart({name})}>
            Adicionar no carrinho
          </button>
        ) : (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Title>{name}</Title>
            <Price>{price}</Price>
          </div>
        )}
      </button>
    </Grid>
  );
};
