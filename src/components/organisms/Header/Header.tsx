import React from 'react';
import {SelectSortProductsOptions} from '../../molecules/SelectSortProductsOptions/SelectSortProductsOptions';

import {ContainerHeader, Title} from './style';

export const Header = () => {
  return (
    <ContainerHeader>
      <Title>Games</Title>
      <SelectSortProductsOptions />
    </ContainerHeader>
  );
};
