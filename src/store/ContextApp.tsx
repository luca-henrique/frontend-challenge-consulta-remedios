import {createContext, useState} from 'react';

import {initialState, Props} from './state';

export const ContextApp = createContext<Props>(initialState);

export const AppProvider = ({children}: any) => {
  const [cart, setCart] = useState<any>(initialState.cart);

  return <ContextApp.Provider value={{cart}}>{children}</ContextApp.Provider>;
};
