import React from 'react';
import styled from 'styled-components';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

const DATA_SELECT = [{value: 1, name: 'Mais populares'}];

export const SortProductsOptions = () => {
  const [sortSelect, setSortSelect] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSortSelect(event.target.value as string);
  };

  return (
    <FormControl sx={{m: 1, width: 262, height: 40}}>
      <Select
        value={sortSelect}
        onChange={handleChange}
        displayEmpty
        inputProps={{'aria-label': 'Without label'}}
      >
        {DATA_SELECT.map((item) => {
          return (
            <MenuItem value={item.value} key={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
