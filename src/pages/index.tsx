import {GetServerSideProps} from 'next';

import {ProductService} from '../service/Products';
const shoppingListService = new ProductService();

import {ProductList} from '../components/organisms/ProductList/ProductList';

import {Header} from '../components/organisms/Header/Header';
import {AsideCart} from '../components/organisms/CartContainer/CartContainer';

import styled from 'styled-components';
import {useReducerHook} from '../hook/useReducerHook';

export const Container = styled.div`
  padding: 42px 72px;
`;

const Home = ({products}: any) => {
  const {state} = useReducerHook();

  return (
    <Container>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Header />
      </div>

      <ProductList products={products} />
    </Container>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await shoppingListService.get();

  return {
    props: {
      products: data,
    },
  };
};
