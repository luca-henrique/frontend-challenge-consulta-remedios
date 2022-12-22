import {GetServerSideProps} from 'next';

import {ProductService} from '../service/Products';
const shoppingListService = new ProductService();

import {ProductList} from '../components/organisms/ProductList/ProductList';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import React from 'react';

const Home = ({products}: any) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div style={{padding: '42px 72px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <header
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <h1>Games</h1>

            <FormControl sx={{m: 1, minWidth: 120}}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{'aria-label': 'Without label'}}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </header>
          <ProductList products={products} />
        </div>
        <div>
          <div style={{width: '262px', height: '325px'}}>Carrinho</div>
        </div>
      </div>
    </div>
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
