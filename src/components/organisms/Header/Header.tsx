import React from 'react';
import styled from 'styled-components';

import {SortProductsOptions} from '../../molecules/SortProductsOptions/SortProductsOptions';

const Title = styled.h1`
  color: #363636;
  font-size: 48px;
`;

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Header = () => {
  return (
    <ContainerHeader>
      <Title>Games</Title>

      <SortProductsOptions />
    </ContainerHeader>
  );
};
