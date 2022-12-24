import Grid from '@mui/material/Grid';
import React from 'react';
import {CardProductItem} from '../../molecules/ProductItem/ProductItem';

export const ProductList = ({products}: any) => {
  return (
    <Grid container style={{marginTop: '55px'}}>
      {products.map((product) => {
        return <CardProductItem key={product.id} product={product} />;
      })}
    </Grid>
  );
};
