import Grid from '@mui/material/Grid';
import Image from 'next/image';
import React from 'react';
import {Card, Price, Title} from './style';

import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';

export const CardProductItem = ({name, price}: any) => {
  return (
    <Grid xs={12} sm={6} md={4} lg={4} style={{marginBottom: '41px'}}>
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
    </Grid>
  );
};
