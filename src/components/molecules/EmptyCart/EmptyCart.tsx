import Image from 'next/image';
import styled from 'styled-components';

import Cart from '../../../assets/icons/cart-icon.svg';

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  margin-bottom: 18px;
`;

export const Description = styled.h4`
  text-align: center;
  color: #746a6a;
`;

export const EmptyCart = () => {
  return (
    <>
      <ImageContainer>
        <Image src={Cart} alt='image' width={90} height={72} />
      </ImageContainer>
      <Description>Até o momento, o seu carrinho está vazio</Description>
    </>
  );
};
