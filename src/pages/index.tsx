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
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Home = ({products}: any) => {
  return (
    <Container>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            marginRight: '40px',
          }}
        >
          <Header />
          <ProductList products={products} />
        </div>
        <AsideCart />
      </div>
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
