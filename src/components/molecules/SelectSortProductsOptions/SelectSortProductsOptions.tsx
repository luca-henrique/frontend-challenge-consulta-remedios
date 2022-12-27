import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useReducerHook} from '../../../hook/useReducerHook';
import {
  orderByLowestPrice,
  orderByScore,
  sortByName,
} from '../../../util/filterProducts';
import {readProducts} from '../../../store/reducers';

export enum ActionType {
  MORE_POPULAR,
  LOWEST_PRICE,
  ALPHABETICAL_ORDER,
}

const DATA_SELECT_OPTIONS_SORT = [
  {value: 'MORE_POPULAR', name: 'Mais populares'},
  {value: 'LOWEST_PRICE', name: 'Menor Preço'},
  {value: 'ALPHABETICAL_ORDER', name: 'Ordem alfabética'},
];

export const SelectSortProductsOptions = () => {
  const [sortSelect, setSortSelect] = React.useState('MORE_POPULAR');

  const handleChange = (event: SelectChangeEvent) => {
    setSortSelect(event.target.value);
    changerSortProdct(event.target.value);
  };

  const {
    state: {products},
    dispatch,
  } = useReducerHook();

  const changerSortProdct = (type: string) => {
    switch (type) {
      case 'MORE_POPULAR':
        dispatch(readProducts(orderByScore(products)));
        break;

      case 'LOWEST_PRICE':
        dispatch(readProducts(orderByLowestPrice(products)));
        break;

      case 'ALPHABETICAL_ORDER':
        dispatch(readProducts(sortByName(products)));
        break;

      default:
        break;
    }
  };

  const options = DATA_SELECT_OPTIONS_SORT.map((item) => {
    return (
      <MenuItem value={item.value} key={item.value}>
        {item.name}
      </MenuItem>
    );
  });

  return (
    <FormControl sx={{m: 1, width: 262, height: 40, margin: '0px'}}>
      <Select
        value={sortSelect}
        onChange={handleChange}
        displayEmpty
        defaultValue='MORE_POPULAR'
      >
        {options}
      </Select>
    </FormControl>
  );
};
