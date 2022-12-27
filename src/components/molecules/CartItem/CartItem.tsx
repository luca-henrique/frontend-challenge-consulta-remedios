import CallOfDuty from '../../../assets/images/call-of-duty-infinite-warfare.png';
import Image from 'next/image';

import IconButton from '@mui/material/IconButton';
import {formatPrice} from '../../../util/formatPrice';
import {useReducerHook} from '../../../hook/useReducerHook';
import {removeProductCart} from '../../../store/reducers';

import {
  CartContainer,
  ContainerImage,
  CartContainerDescription,
  TitleItemCart,
  PriceItemCart,
  Container,
} from './style';
import {IProduct} from '../../../types';

//@ts-ignore
export const CartItem = ({cart}: IProduct) => {
  const {dispatch} = useReducerHook();

  return (
    <Container>
      <CartContainer>
        <ContainerImage>
          <Image src={CallOfDuty} alt='aq' width={41} height={42} />
        </ContainerImage>
        <CartContainerDescription>
          <TitleItemCart>{cart.name}</TitleItemCart>
          <PriceItemCart>{formatPrice(cart.price)}</PriceItemCart>
        </CartContainerDescription>
        <IconButton
          style={{width: '30px', height: '30px'}}
          onClick={() => dispatch(removeProductCart(cart))}
        >
          x
        </IconButton>
      </CartContainer>
    </Container>
  );
};
