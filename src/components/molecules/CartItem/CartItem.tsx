import styled from 'styled-components';

import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';
import Image from 'next/image';

import IconButton from '@mui/material/IconButton';

export const TitleItemCart = styled.h6`
  color: #7f7575;
  font-size: 14px;
  margin-bottom: 2px;
`;

export const PriceItemCart = styled.h6`
  color: #423b3b;
  font-size: 14px;
  margin-bottom: 2px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CartContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const ContainerImage = styled.div`
  width: 60px;
  height: 53px;
  padding: 6px 10px;
  background: #eeeeee;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartItem = () => {
  return (
    <div style={{marginBottom: '18px'}}>
      <CartContainer>
        <ContainerImage>
          <Image src={CallOfDuty} alt='aq' width={41} height={42} />
        </ContainerImage>
        <CartContainerDescription>
          <TitleItemCart>Call Of Duty: Infinite Warfare</TitleItemCart>
          <PriceItemCart>R$ 49,99</PriceItemCart>
        </CartContainerDescription>
        <IconButton style={{width: '30px', height: '30px'}}>x</IconButton>
      </CartContainer>
    </div>
  );
};
