import React from 'react';
import {initialState} from './state';
import {ProductCartActions} from './actions';

export const CartContext = React.createContext<{
  state: any;
  dispatch: React.Dispatch<ProductCartActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
