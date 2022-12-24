import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

const DATA_SELECT_OPTIONS_SORT = [
  {value: 'Mais populares', name: 'Mais populares'},
];

export const SelectSortProductsOptions = () => {
  const [sortSelect, setSortSelect] = React.useState('Mais populares');

  const handleChange = (event: SelectChangeEvent) => {
    setSortSelect(event.target.value as string);
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
        defaultValue='Mais populares'
      >
        {options}
      </Select>
    </FormControl>
  );
};
