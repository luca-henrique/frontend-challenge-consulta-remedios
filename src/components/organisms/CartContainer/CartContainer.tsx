import styled from 'styled-components';

import {EmptyCart} from '../../molecules/EmptyCart/EmptyCart';
import {CartItens} from '../../molecules/CartListItens/CartListItens';

const CartContainer = styled.aside`
  display: flex;
  flex-direction: column;

  border: 1px solid #e1e1e1;
  padding: 20px 25px;

  width: 20%;
`;

const Title = styled.h2`
  color: #363636;
  font-size: 18px;
`;

const CartCountItem = styled.h4`
  color: #7f7575;
  font-size: 14px;
  margin-left: 4px;
`;

export const AsideCart = () => {
  const cart = [1, 2, 3];

  const EXIST_ITEMS = cart.length > 0;

  return (
    <CartContainer>
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <Title>Carrinho</Title>
        {EXIST_ITEMS && <CartCountItem>({cart.length} itens)</CartCountItem>}
      </div>
      {EXIST_ITEMS ? <CartItens /> : <EmptyCart />}
    </CartContainer>
  );
};
