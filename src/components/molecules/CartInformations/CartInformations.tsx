import {Button} from '@mui/material';
import React from 'react';
import {useReducerHook} from '../../../hook/useReducerHook';
import {DescriptionCartLine} from '../DescriptionCartLine/DescriptionCartLine';

export const CartInformations = () => {
  const {
    state: {total, shipping, subtotal},
  } = useReducerHook();

  return (
    <>
      <DescriptionCartLine name='subtotal' price={subtotal} />
      <DescriptionCartLine name='frete' price={shipping} />
      <DescriptionCartLine name='total' price={total} />
      <Button variant='contained' disableElevation>
        Finalizar compra
      </Button>
    </>
  );
};
