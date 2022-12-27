import {createContext, useState} from 'react';
import {IProduct} from '../types';

import {initialState, Props} from './state';

export const ContextApp = createContext<Props>(initialState);

export const AppProvider = ({children}: any) => {
  const [cart] = useState<IProduct[]>(initialState.cart);
  //@ts-ignore
  return <ContextApp.Provider value={{cart}}>{children}</ContextApp.Provider>;
};
