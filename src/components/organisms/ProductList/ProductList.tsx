import {useReducerHook} from '../../../hook/useReducerHook';
import {IProduct} from '../../../types';
import {CardProductItem} from '../../molecules/ProductItem/ProductItem';
import {Container} from './style';

const ProductList = () => {
  const {
    state: {products},
  } = useReducerHook();

  return (
    <Container>
      {products.map((product: IProduct) => (
        <CardProductItem key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
