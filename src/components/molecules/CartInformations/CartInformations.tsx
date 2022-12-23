import {Button} from '@mui/material';
import React from 'react';
import {DescriptionCartLine} from '../DescriptionCartLine/DescriptionCartLine';

export const CartInformations = () => {
  return (
    <>
      <DescriptionCartLine name='subtotal' price={200} />
      <DescriptionCartLine name='frete' price={200} />
      <DescriptionCartLine name='total' price={200} />
      <Button variant='contained' disableElevation>
        Finalizar compra
      </Button>
    </>
  );
};
