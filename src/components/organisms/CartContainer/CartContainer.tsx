import {EmptyCart} from '../../molecules/EmptyCart/EmptyCart';
import {CartItens} from '../../molecules/CartListItens/CartListItens';
import {useReducerHook} from '../../../hook/useReducerHook';

import {CartContainer, Title, CartCountItem, Row} from './style';

const AsideCart = () => {
  const {
    state: {cart},
  } = useReducerHook();

  const EXIST_ITEMS = cart.length > 0;

  return (
    <CartContainer>
      <Row>
        <Title>Carrinho</Title>
        {EXIST_ITEMS && <CartCountItem>({cart.length} itens)</CartCountItem>}
      </Row>
      {EXIST_ITEMS ? <CartItens /> : <EmptyCart />}
    </CartContainer>
  );
};

export default AsideCart;
