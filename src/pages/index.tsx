import {GetServerSideProps} from 'next';
import dynamic from 'next/dynamic';

import {useReducerHook} from '../hook/useReducerHook';
import {useEffect} from 'react';
import {readProducts} from '../store/reducers';

import {ProductService} from '../service/Products';
const shoppingListService = new ProductService();

const Header = dynamic(() => import('../components/organisms/Header/Header'));
const ProductList = dynamic(
  () => import('../components/organisms/ProductList/ProductList'),
);
const AsideCart = dynamic(
  () => import('../components/organisms/CartContainer/CartContainer'),
);

import {Container, ContentContainer, Row} from '../styles/style';

export default function Home({products}: any) {
  const {dispatch} = useReducerHook();

  useEffect(() => {
    dispatch(readProducts(products));
  }, []);

  return (
    <Container>
      <Row>
        <ContentContainer>
          <Header />
          <ProductList />
        </ContentContainer>
        <AsideCart />
      </Row>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await shoppingListService.get();

  return {
    props: {
      products: data,
    },
  };
};
