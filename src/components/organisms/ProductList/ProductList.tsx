import {useEffect, useState} from 'react';
import {ProductService} from '../../../service/Products';

const shoppingListService = new ProductService();

export const ProductList = () => {
  const [productsList, setProductList] = useState([]);

  const getProducts = async () => {
    const productService = await shoppingListService.get();
    setProductList(productService);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {productsList.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </div>
  );
};
